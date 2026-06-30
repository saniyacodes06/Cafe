'use server'

import { auth } from '@clerk/nextjs/server'
import { stripe } from '@/lib/stripe'
import { db, schema } from '@/lib/db'
import { getAuthUserId } from '@/lib/clerk-auth'
import { eq, and, inArray, gte } from 'drizzle-orm'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'

export async function createCheckoutSession(formData: FormData) {
  const userId = await getAuthUserId()
  if (!userId) {
    // Fallback: try to get user from clerkId in formData for development
    const clerkId = formData.get('clerkId') as string
    if (clerkId) {
      const [user] = await db
        .select()
        .from(schema.users)
        .where(eq(schema.users.clerkId, clerkId))
        .limit(1)
      if (user) {
        // Use this userId
        return createSessionForUser(user.id, formData)
      }
    }
    throw new Error('Unauthorized - please sign in')
  }

  return createSessionForUser(userId, formData)
}

async function createSessionForUser(userId: number, formData: FormData) {
  const addressId = formData.get('addressId') as string
  if (!addressId) throw new Error('Address is required')

  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.id, userId))
    .limit(1)
  if (!user) throw new Error('User not found')

  // Check for active table booking for 15% discount
  const now = new Date()
  const today = now.toISOString().split('T')[0]
  const currentTime = now.toTimeString().slice(0, 5)
  
  const [activeBooking] = await db
    .select()
    .from(schema.tableBookings)
    .innerJoin(schema.tables, eq(schema.tableBookings.tableId, schema.tables.id))
    .where(
      and(
        eq(schema.tableBookings.userId, userId),
        eq(schema.tableBookings.status, 'confirmed'),
        eq(schema.tableBookings.bookingDate, today),
        gte(schema.tableBookings.bookingTime, currentTime)
      )
    )
    .limit(1)

  const hasTableBooking = !!activeBooking
  const discountPercent = hasTableBooking ? 15 : 0

  let resolvedAddressId: number | null = null
  if (!addressId.startsWith('mock-')) {
    const [address] = await db
      .select()
      .from(schema.addresses)
      .where(
        and(eq(schema.addresses.id, Number(addressId)), eq(schema.addresses.userId, user.id))
      )
      .limit(1)
    if (!address) throw new Error('Invalid address')
    resolvedAddressId = address.id
  }

  const [cart] = await db
    .select()
    .from(schema.cart)
    .where(eq(schema.cart.userId, user.id))
    .limit(1)
  if (!cart) throw new Error('Cart is empty')

  const cartItems = await db
    .select()
    .from(schema.cartItems)
    .where(eq(schema.cartItems.cartId, cart.id))

  if (cartItems.length === 0) throw new Error('Cart is empty')

  const menuItemIds = cartItems.map((ci) => ci.menuItemId)
  const menuItems = await db
    .select()
    .from(schema.menuItems)
    .where(inArray(schema.menuItems.id, menuItemIds))

  const totalAmount = cartItems.reduce((sum, ci) => {
    const menuItem = menuItems.find((m) => m.id === ci.menuItemId)
    const price = menuItem ? Number(menuItem.price) : 0
    return sum + price * ci.quantity
  }, 0)

  const discountAmount = Math.round(totalAmount * discountPercent / 100)
  const discountedTotal = totalAmount - discountAmount
  const deliveryFee = discountedTotal >= 299 ? 0 : 29
  const grandTotal = discountedTotal + deliveryFee

  // Create order with pending payment - but DON'T clear cart yet
  const [order] = await db
    .insert(schema.orders)
    .values({
      userId: user.id,
      addressId: resolvedAddressId,
      totalAmount: String(grandTotal),
      paymentMethod: 'stripe',
      paymentStatus: 'pending',
      orderStatus: 'pending',
    })
    .returning()

  for (const ci of cartItems) {
    const menuItem = menuItems.find((m) => m.id === ci.menuItemId)
    if (menuItem) {
      const originalPrice = Number(menuItem.price)
      const discountedPrice = Math.round(originalPrice * (100 - discountPercent) / 100)
      await db.insert(schema.orderItems).values({
        orderId: order.id,
        menuItemId: ci.menuItemId,
        quantity: ci.quantity,
        itemPrice: String(discountedPrice),
      })
    }
  }

  // Store cart reference in order metadata for webhook to clear later
  const lineItems = cartItems.map((ci) => {
    const menuItem = menuItems.find((m) => m.id === ci.menuItemId)
    const imageUrl = menuItem?.imageUrl ? `${DOMAIN}${menuItem.imageUrl}` : undefined
    const originalPrice = menuItem ? Number(menuItem.price) : 0
    const discountedPrice = Math.round(originalPrice * (100 - discountPercent) / 100)
    return {
      price_data: {
        currency: 'inr',
        product_data: {
          name: menuItem?.name || 'Menu Item',
          images: imageUrl ? [imageUrl] : [],
        },
        unit_amount: discountedPrice * 100,
      },
      quantity: ci.quantity,
    }
  })

  if (deliveryFee > 0) {
    lineItems.push({
      price_data: {
        currency: 'inr',
        product_data: { name: 'Delivery Fee', images: [] },
        unit_amount: deliveryFee * 100,
      },
      quantity: 1,
    })
  }

  if (discountPercent > 0) {
    lineItems.push({
      price_data: {
        currency: 'inr',
        product_data: { name: `Table Booking Discount (${discountPercent}%)`, images: [] },
        unit_amount: -discountAmount * 100,
      },
      quantity: 1,
    })
  }

  const orderRef = `ORD-${String(order.id).padStart(3, '0')}`

  const session = await stripe.checkout.sessions.create({
    customer_email: user.email,
    line_items: lineItems,
    mode: 'payment',
    success_url: `${DOMAIN}/order-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${DOMAIN}/checkout/payment?cancelled=true&orderId=${order.id}`,
    metadata: {
      orderId: String(order.id),
      orderRef,
      cartId: String(cart.id), // Store cart ID for webhook
      hasTableBooking: String(hasTableBooking),
      discountPercent: String(discountPercent),
    },
  })

  return { url: session.url, sessionId: session.id }
}

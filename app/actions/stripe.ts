'use server'

import { auth } from '@clerk/nextjs/server'
import { stripe } from '@/lib/stripe'
import { db, schema } from '@/lib/db'
import { getAuthUserId } from '@/lib/clerk-auth'
import { eq, and, inArray } from 'drizzle-orm'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'

export async function createCheckoutSession(formData: FormData) {
  const userId = await getAuthUserId()
  if (!userId) throw new Error('Unauthorized')

  const addressId = formData.get('addressId') as string
  if (!addressId) throw new Error('Address is required')

  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.id, userId))
    .limit(1)
  if (!user) throw new Error('User not found')

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

  const deliveryFee = totalAmount >= 299 ? 0 : 29
  const grandTotal = totalAmount + deliveryFee

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
      await db.insert(schema.orderItems).values({
        orderId: order.id,
        menuItemId: ci.menuItemId,
        quantity: ci.quantity,
        itemPrice: String(menuItem.price),
      })
    }
  }

  await db.delete(schema.cartItems).where(eq(schema.cartItems.cartId, cart.id))
  await db.delete(schema.cart).where(eq(schema.cart.id, cart.id))

  const lineItems = cartItems.map((ci) => {
    const menuItem = menuItems.find((m) => m.id === ci.menuItemId)
    return {
      price_data: {
        currency: 'inr',
        product_data: {
          name: menuItem?.name || 'Menu Item',
          images: menuItem?.imageUrl ? [menuItem.imageUrl] : [],
        },
        unit_amount: Math.round((menuItem ? Number(menuItem.price) : 0) * 100),
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

  const orderRef = `ORD-${String(order.id).padStart(3, '0')}`

  const session = await stripe.checkout.sessions.create({
    customer_email: user.email,
    line_items: lineItems,
    mode: 'payment',
    success_url: `${DOMAIN}/order-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${DOMAIN}/checkout/payment?cancelled=true`,
    metadata: {
      orderId: String(order.id),
      orderRef,
    },
  })

  return { url: session.url, sessionId: session.id }
}

import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { db, schema } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set')
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }

  const body = await request.text()
  const signature = request.headers.get('stripe-signature') || ''

  let event
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as import('stripe').Stripe.Checkout.Session
    const orderId = session.metadata?.orderId
    const cartId = session.metadata?.cartId

    if (!orderId) {
      console.error('No orderId in session metadata')
      return NextResponse.json({ error: 'Missing orderId' }, { status: 400 })
    }

    try {
      await db
        .update(schema.orders)
        .set({
          paymentStatus: 'paid',
          orderStatus: 'pending',
        })
        .where(eq(schema.orders.id, Number(orderId)))

      await db.insert(schema.payments).values({
        orderId: Number(orderId),
        stripeSessionId: session.id,
        stripePaymentIntentId: session.payment_intent as string,
        amount: String((session.amount_total || 0) / 100),
        status: 'paid',
        paidAt: new Date(),
      })

      // Clear the cart after successful payment
      if (cartId) {
        await db.delete(schema.cartItems).where(eq(schema.cartItems.cartId, Number(cartId)))
        await db.delete(schema.cart).where(eq(schema.cart.id, Number(cartId)))
      }
    } catch (err) {
      console.error('Failed to update order payment:', err)
      return NextResponse.json({ error: 'Database update failed' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}

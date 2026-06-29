import { NextRequest } from 'next/server'
import { stripe } from '@/lib/stripe'
import { db, schema } from '@/lib/db'
import { eq } from 'drizzle-orm'
import { ok, bad, serverError } from '@/lib/api-utils'

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get('session_id')
    if (!sessionId) return bad('Missing session_id')

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.status !== 'complete') {
      return bad('Payment not completed')
    }

    const orderId = session.metadata?.orderId
    if (!orderId) return bad('No order associated')

    const [order] = await db
      .select()
      .from(schema.orders)
      .where(eq(schema.orders.id, Number(orderId)))
      .limit(1)

    if (!order) return bad('Order not found')

    const orderRef = `ORD-${String(order.id).padStart(3, '0')}`

    return ok({
      orderRef,
      orderId: String(order.id),
      amount: order.totalAmount,
      paymentStatus: order.paymentStatus,
    })
  } catch (err) {
    return serverError(err)
  }
}

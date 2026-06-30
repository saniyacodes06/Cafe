'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Wallet, CreditCard, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/lib/context/cart-context'
import { orders as ordersApi } from '@/lib/api'
import { formatPrice, calculateCartTotal } from '@/lib/utils'

type PaymentMode = 'cod' | 'stripe'

function PaymentPageInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { items, clearCart } = useCart()
  const [paymentMode, setPaymentMode] = useState<PaymentMode>('cod')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')

  const total = calculateCartTotal(items)
  const deliveryFee = total >= 299 ? 0 : 29
  const grandTotal = total + deliveryFee

  const addressId = searchParams.get('addressId') || ''
  const cancelled = searchParams.get('cancelled') === 'true'

  const handlePlaceOrder = async () => {
    if (!addressId) return
    setProcessing(true)
    setError('')
    try {
      if (paymentMode === 'stripe') {
        const formData = new FormData()
        formData.append('addressId', addressId)
        // Pass clerkId for auth fallback in development
        formData.append('clerkId', 'user_3Fp2P1JybNxyN624ZJwPmuMWBYn')

        const { createCheckoutSession } = await import('@/app/actions/stripe')
        const result = await createCheckoutSession(formData)
        if (result.url) {
          await clearCart()
          window.location.href = result.url
          return
        }
        throw new Error('Failed to create checkout session')
      }

      const orderItems = items.map(i => ({ menuItemId: i.menuItemId, quantity: i.quantity }))
      const result = await ordersApi.create({
        addressId,
        paymentMethod: 'cod',
        items: orderItems,
      })
      await clearCart()
      router.push(`/orders/${result.id}/track?success=true`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to place order')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <Button variant="ghost" asChild className="mb-6 gap-2">
        <Link href="/checkout"><ArrowLeft size={16} /> Back to Checkout</Link>
      </Button>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Confirm Order</h1>

      {cancelled && (
        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 flex items-center gap-3">
          <AlertCircle size={20} className="text-amber-600 shrink-0" />
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Payment was cancelled. Please try again or choose another method.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Order Items ({items.length})</h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.menuItemId} className="flex items-center gap-3">
                    <div className="h-14 w-14 rounded-xl bg-muted overflow-hidden shrink-0">
                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-sm">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <h3 className="font-semibold">Payment Method</h3>

            <Card
              className={`cursor-pointer transition-all ${paymentMode === 'stripe' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setPaymentMode('stripe')}
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CreditCard size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Pay Online (Card / UPI / Net Banking)</p>
                  <p className="text-xs text-muted-foreground">Secure payment via Stripe</p>
                </div>
                <div className={`h-4 w-4 rounded-full border-2 ${paymentMode === 'stripe' ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                  {paymentMode === 'stripe' && <div className="h-full w-full rounded-full bg-primary" />}
                </div>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${paymentMode === 'cod' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setPaymentMode('cod')}
            >
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Wallet size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Cash on Delivery</p>
                  <p className="text-xs text-muted-foreground">Pay when your order arrives</p>
                </div>
                <div className={`h-4 w-4 rounded-full border-2 ${paymentMode === 'cod' ? 'border-primary bg-primary' : 'border-muted-foreground'}`}>
                  {paymentMode === 'cod' && <div className="h-full w-full rounded-full bg-primary" />}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="md:col-span-2">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>{deliveryFee === 0 ? <span className="text-green-600">Free</span> : formatPrice(deliveryFee)}</span>
                </div>
              </div>
              <Separator className="mb-4" />
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span className="text-primary">{formatPrice(grandTotal)}</span>
              </div>
              {error && <p className="text-sm text-destructive mb-4">{error}</p>}
              <Button
                className="w-full h-12 rounded-xl"
                disabled={processing || !addressId}
                onClick={handlePlaceOrder}
              >
                {processing
                  ? 'Processing...'
                  : paymentMode === 'stripe'
                    ? `Pay Online - ${formatPrice(grandTotal)}`
                    : `Place Order - ${formatPrice(grandTotal)}`
                }
              </Button>
              {!addressId && (
                <p className="text-xs text-muted-foreground text-center mt-2">Please select an address first</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function PaymentPage() {
  return (
    <Suspense>
      <PaymentPageInner />
    </Suspense>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Check, CreditCard, Smartphone, Landmark, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/lib/context/cart-context'
import { orders as ordersApi } from '@/lib/api'
import { PAYMENT_METHODS } from '@/lib/constants'
import { formatPrice, calculateCartTotal } from '@/lib/utils'
import { cn } from '@/lib/utils'

const paymentIcons: Record<string, React.ElementType> = {
  upi: Smartphone,
  card: CreditCard,
  netbanking: Landmark,
  cod: Wallet,
}

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { items, itemCount, clearCart } = useCart()
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')

  const total = calculateCartTotal(items)
  const deliveryFee = total >= 299 ? 0 : 29
  const grandTotal = total + deliveryFee

  const addressId = searchParams.get('addressId') || ''

  const handlePlaceOrder = async () => {
    if (!selectedMethod || !addressId) return
    setProcessing(true)
    setError('')
    try {
      const orderItems = items.map(i => ({ menuItemId: i.menuItemId, quantity: i.quantity }))
      const result = await ordersApi.create({
        addressId,
        paymentMethod: selectedMethod,
        items: orderItems,
      })
      clearCart()
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

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Payment</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Select Payment Method</h3>
          <div className="space-y-3">
            {PAYMENT_METHODS.map((method) => {
              const Icon = paymentIcons[method.id]
              return (
                <Card
                  key={method.id}
                  className={cn(
                    'cursor-pointer transition-all',
                    selectedMethod === method.id ? 'border-primary ring-2 ring-primary/20' : ''
                  )}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={20} className="text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{method.label}</p>
                    </div>
                    <div className={cn(
                      'h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0',
                      selectedMethod === method.id ? 'border-primary' : 'border-muted-foreground'
                    )}>
                      {selectedMethod === method.id && <div className="h-3 w-3 rounded-full bg-primary" />}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items ({itemCount})</span>
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
                disabled={!selectedMethod || processing}
                onClick={handlePlaceOrder}
              >
                {processing ? 'Processing...' : `Pay ${formatPrice(grandTotal)}`}
              </Button>
              {!selectedMethod && (
                <p className="text-xs text-muted-foreground text-center mt-2">Select a payment method to continue</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

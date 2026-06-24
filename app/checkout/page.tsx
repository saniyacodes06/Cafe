'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, MapPin, CreditCard, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/lib/context/cart-context'
import { address as addressApi } from '@/lib/api'
import { formatPrice, calculateCartTotal } from '@/lib/utils'
import CartItemRow from '@/components/features/CartItemRow'
import type { Address } from '@/types'

export default function CheckoutPage() {
  const router = useRouter()
  const { items } = useCart()
  const [addresses, setAddresses] = useState<Address[]>([])
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null)

  useEffect(() => {
    addressApi.list().then(setAddresses).catch(() => {})
  }, [])

  useEffect(() => {
    if (addresses.length > 0) {
      setSelectedAddress(addresses.find(a => a.isDefault) || addresses[0])
    }
  }, [addresses])

  const total = calculateCartTotal(items)
  const deliveryFee = total >= 299 ? 0 : 29
  const grandTotal = total + deliveryFee

  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <MapPin size={18} className="text-primary" /> Delivery Address
                </h3>
                <Link href="/checkout/address" className="text-sm text-primary font-medium hover:underline">
                  {addresses.length > 0 ? 'Change' : 'Add'}
                </Link>
              </div>
              {selectedAddress ? (
                <div>
                  <p className="font-medium">{selectedAddress.title}</p>
                  <p className="text-sm text-muted-foreground">{selectedAddress.fullAddress}, {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}</p>
                  {selectedAddress.landmark && <p className="text-sm text-muted-foreground">Landmark: {selectedAddress.landmark}</p>}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No address selected</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <CreditCard size={18} className="text-primary" /> Payment Method
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'upi', label: 'UPI', icon: '💳' },
                  { id: 'card', label: 'Card', icon: '💳' },
                  { id: 'netbanking', label: 'Net Banking', icon: '🏦' },
                  { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                ].map((method) => (
                  <Link key={method.id} href={`/checkout/payment?method=${method.id}`}>
                    <div className="flex items-center gap-3 rounded-xl border border-border p-4 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
                      <span className="text-2xl">{method.icon}</span>
                      <span className="text-sm font-medium">{method.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Order Items ({items.length})</h3>
              <div>
                {items.map((item) => (
                  <CartItemRow key={item.menuItemId} item={item} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>{deliveryFee === 0 ? <span className="text-green-600">Free</span> : formatPrice(deliveryFee)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(grandTotal)}</span>
                </div>
              </div>
              <Button
                className="w-full h-12 rounded-xl gap-2"
                onClick={() => router.push('/checkout/payment')}
              >
                Place Order <ChevronRight size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

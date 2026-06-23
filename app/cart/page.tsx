'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/lib/context/cart-context'
import { formatPrice, calculateCartTotal } from '@/lib/utils'
import CartItemRow from '@/components/features/CartItemRow'
import EmptyState from '@/components/features/EmptyState'

export default function CartPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const total = calculateCartTotal(items)
  const deliveryFee = total >= 299 ? 0 : 29
  const grandTotal = total + deliveryFee

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-8">
        <EmptyState
          icon={ShoppingBag}
          title="Your cart is empty"
          description="Looks like you haven't added anything yet. Browse our menu to find something delicious."
          actionLabel="Browse Menu"
          actionHref="/menu"
        />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive">
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border p-4">
            {items.map((item) => (
              <CartItemRow key={item.menuItemId} item={item} />
            ))}
          </div>
          <Button variant="ghost" asChild className="mt-4 gap-2">
            <Link href="/menu">
              <ArrowLeft size={16} /> Continue Shopping
            </Link>
          </Button>
        </div>

        <div>
          <div className="rounded-xl border border-border p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>{deliveryFee === 0 ? <span className="text-green-600">Free</span> : formatPrice(deliveryFee)}</span>
              </div>
              {deliveryFee > 0 && (
                <p className="text-xs text-muted-foreground">Free delivery on orders over {formatPrice(299)}</p>
              )}
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-primary">{formatPrice(grandTotal)}</span>
              </div>
            </div>
            <Button
              className="w-full mt-6 h-12 rounded-xl gap-2"
              onClick={() => router.push('/checkout')}
            >
              Proceed to Checkout <ArrowLeft size={16} className="rotate-180" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

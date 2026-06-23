'use client'

import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/context/cart-context'
import { formatPrice } from '@/lib/utils'
import type { CartItem } from '@/types'

interface CartItemRowProps {
  item: CartItem
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center gap-4 py-4 border-b border-border last:border-b-0">
      <div className="h-16 w-16 rounded-xl bg-muted overflow-hidden shrink-0">
        <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm">{item.name}</h4>
        <p className="text-sm font-semibold text-primary mt-0.5">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => updateQuantity(item.menuItemId, item.quantity - 1)}
        >
          {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
        </Button>
        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => updateQuantity(item.menuItemId, item.quantity + 1)}
        >
          <Plus size={14} />
        </Button>
      </div>
      <p className="w-20 text-right font-semibold text-sm">{formatPrice(item.price * item.quantity)}</p>
    </div>
  )
}

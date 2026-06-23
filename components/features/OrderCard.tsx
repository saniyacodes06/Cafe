import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatPrice, formatDate, getStatusColor } from '@/lib/utils'
import type { Order } from '@/types'

interface OrderCardProps {
  order: Order
  showLink?: boolean
}

export default function OrderCard({ order, showLink = true }: OrderCardProps) {
  const statusLabel = order.orderStatus.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-sm">{order.id}</h4>
            <p className="text-xs text-muted-foreground">{formatDate(order.createdAt)}</p>
          </div>
          <Badge variant="outline" className={getStatusColor(order.orderStatus)}>
            {statusLabel}
          </Badge>
        </div>
        <div className="space-y-2 mb-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-muted overflow-hidden shrink-0">
                <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.name}</p>
                <p className="text-xs text-muted-foreground">x{item.quantity}</p>
              </div>
              <p className="text-sm font-medium">{formatPrice(item.itemPrice * item.quantity)}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Total</p>
            <p className="font-bold text-primary">{formatPrice(order.totalAmount)}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>{order.paymentMethod}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className={order.paymentStatus === 'paid' ? 'text-green-600' : 'text-amber-600'}>
              {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
            </span>
          </div>
          {showLink && (
            <Link
              href={`/orders/${encodeURIComponent(order.id)}/track`}
              className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              Track <ChevronRight size={14} />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

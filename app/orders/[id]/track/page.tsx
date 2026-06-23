'use client'

import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { ArrowLeft, Check, Clock, ChefHat, Truck, CheckCircle, MapPin, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { getOrderById } from '@/lib/data'
import { ORDER_STATUS_FLOW, ORDER_STATUS_LABELS } from '@/lib/constants'
import { formatPrice, formatDate, cn } from '@/lib/utils'
import ReviewCard from '@/components/features/ReviewCard'

const statusIcons: Record<string, React.ElementType> = {
  placed: Package,
  accepted: Check,
  preparing: ChefHat,
  out_for_delivery: Truck,
  delivered: CheckCircle,
}

export default function TrackOrderPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const isSuccess = searchParams.get('success') === 'true'
  
  const order = getOrderById(params.id as string)

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4">
        <Package size={48} className="text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Order Not Found</h2>
        <p className="text-muted-foreground mb-6">The order you are looking for does not exist.</p>
        <Link href="/orders">
          <Button>View My Orders</Button>
        </Link>
      </div>
    )
  }

  const currentIndex = ORDER_STATUS_FLOW.indexOf(order.orderStatus as typeof ORDER_STATUS_FLOW[number])
  const isDelivered = order.orderStatus === 'delivered'

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <Button variant="ghost" asChild className="mb-6 gap-2">
        <Link href="/orders"><ArrowLeft size={16} /> Back to Orders</Link>
      </Button>

      {/* Success Banner */}
      {isSuccess && (
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl p-4 mb-6 flex items-center gap-3">
          <CheckCircle size={20} className="text-green-600 shrink-0" />
          <p className="text-sm font-medium text-green-800 dark:text-green-200">Order placed successfully! Your delicious meal is on its way.</p>
        </div>
      )}

      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">{order.id}</h1>
          <p className="text-sm text-muted-foreground">{formatDate(order.createdAt)}</p>
        </div>
        <Badge variant="outline" className="text-sm px-3 py-1">
          {ORDER_STATUS_LABELS[order.orderStatus]}
        </Badge>
      </div>

      {/* Progress Tracker */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="space-y-0">
            {ORDER_STATUS_FLOW.map((status, index) => {
              const Icon = statusIcons[status]
              const isCompleted = index <= currentIndex
              const isCurrent = index === currentIndex
              return (
                <div key={status} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={cn(
                      'h-10 w-10 rounded-full flex items-center justify-center shrink-0 transition-colors',
                      isCompleted ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground',
                      isCurrent && 'ring-4 ring-primary/20'
                    )}>
                      {Icon && <Icon size={18} />}
                    </div>
                    {index < ORDER_STATUS_FLOW.length - 1 && (
                      <div className={cn(
                        'w-0.5 h-12',
                        isCompleted && index < currentIndex ? 'bg-primary' : 'bg-muted'
                      )} />
                    )}
                  </div>
                  <div className={cn('pb-12', index === ORDER_STATUS_FLOW.length - 1 && 'pb-0')}>
                    <p className={cn(
                      'font-medium text-sm',
                      isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    )}>
                      {ORDER_STATUS_LABELS[status]}
                    </p>
                    {isCurrent && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {status === 'placed' && 'Your order has been received'}
                        {status === 'accepted' && 'Restaurant is preparing to cook'}
                        {status === 'preparing' && 'Your food is being prepared'}
                        {status === 'out_for_delivery' && 'Your driver is on the way'}
                        {status === 'delivered' && 'Enjoy your meal!'}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Order Items */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Order Items</h3>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-xl bg-muted overflow-hidden shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-sm">{formatPrice(item.itemPrice * item.quantity)}</p>
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <div className="flex items-center justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-bold text-lg text-primary">{formatPrice(order.totalAmount)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Address */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={16} className="text-primary" />
            <h3 className="font-semibold">Delivery Address</h3>
          </div>
          <p className="font-medium">{order.deliveryAddress.title}</p>
          <p className="text-sm text-muted-foreground">{order.deliveryAddress.fullAddress}, {order.deliveryAddress.city}, {order.deliveryAddress.state} - {order.deliveryAddress.pincode}</p>
        </CardContent>
      </Card>

      {/* Payment Info */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Payment</h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Method:</span>
            <span className="font-medium">{order.paymentMethod}</span>
            <Badge variant={order.paymentStatus === 'paid' ? 'success' : 'warning'} className="text-[10px] ml-2">
              {order.paymentStatus.toUpperCase()}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Review Prompt */}
      {isDelivered && (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-2">Enjoyed your meal?</h3>
            <p className="text-sm text-muted-foreground mb-4">Share your experience and help others decide!</p>
            <Link href={`/dashboard/reviews`}>
              <Button variant="outline" className="gap-2">Write a Review</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

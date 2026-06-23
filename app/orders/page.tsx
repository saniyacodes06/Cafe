'use client'

import { Package } from 'lucide-react'
import { orders } from '@/lib/data'
import OrderCard from '@/components/features/OrderCard'
import EmptyState from '@/components/features/EmptyState'

export default function OrdersPage() {
  if (orders.length === 0) {
    return (
      <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
        <EmptyState icon={Package} title="No orders yet" description="Your orders will appear here once you place one." actionLabel="Browse Menu" actionHref="/menu" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

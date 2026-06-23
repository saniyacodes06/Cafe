'use client'

import { Star } from 'lucide-react'
import { reviews } from '@/lib/data'
import ReviewCard from '@/components/features/ReviewCard'
import EmptyState from '@/components/features/EmptyState'

export default function DashboardReviewsPage() {
  if (reviews.length === 0) {
    return (
      <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
        <EmptyState icon={Star} title="No reviews yet" description="Share your experience after ordering." />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

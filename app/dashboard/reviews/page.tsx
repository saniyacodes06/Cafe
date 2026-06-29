'use client'

import { useEffect, useState } from 'react'
import { Star as StarIcon } from 'lucide-react'
import { reviews as reviewsApi } from '@/lib/api'
import ReviewCard from '@/components/features/ReviewCard'
import EmptyState from '@/components/features/EmptyState'
import type { Review } from '@/types'

export default function DashboardReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    reviewsApi.list()
      .then(setReviews)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
        <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-24 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
        <EmptyState icon={StarIcon} title="No reviews yet" description="Your reviews will appear here once you review an item." actionLabel="Browse Menu" actionHref="/menu" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

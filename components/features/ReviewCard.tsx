import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { formatDate, getInitials } from '@/lib/utils'
import type { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {getInitials(review.userName)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium text-sm">{review.userName}</h4>
              <span className="text-xs text-muted-foreground">{formatDate(review.createdAt)}</span>
            </div>
            <div className="flex items-center gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30'}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{review.comment}</p>
            {review.menuItemName && (
              <p className="text-xs text-primary mt-2">Reviewed on: {review.menuItemName}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

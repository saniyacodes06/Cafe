'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowLeft, Star, Plus, Minus, ShoppingBag, Heart, Share2, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { menu as menuApi } from '@/lib/api'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/lib/context/cart-context'
import ReviewCard from '@/components/features/ReviewCard'
import type { MenuItem, Review } from '@/types'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState<MenuItem | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    menuApi.get(params.id as string)
      .then((data) => {
        setItem(data.item)
        setReviews(data.reviews)
      })
      .finally(() => setLoading(false))
  }, [params.id])

  if (loading) {
    return (
      <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="aspect-square rounded-2xl bg-muted animate-pulse" />
          <div className="space-y-4">
            <div className="h-4 bg-muted animate-pulse rounded w-1/4" />
            <div className="h-8 bg-muted animate-pulse rounded w-3/4" />
            <div className="h-4 bg-muted animate-pulse rounded w-1/3" />
            <div className="h-20 bg-muted animate-pulse rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <h2 className="text-2xl font-bold mb-2">Item Not Found</h2>
        <p className="text-muted-foreground mb-6">The item you are looking for does not exist.</p>
        <Link href="/menu">
          <Button>Back to Menu</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-8">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft size={16} /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
          <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
              <Heart size={18} />
            </button>
            <button className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Badge variant="outline" className="w-fit mb-3 text-xs">{item.categoryName}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{item.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-amber-400 text-amber-400" />
              <span className="font-semibold">{item.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({item.reviewCount} reviews)</span>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Clock size={16} />
            <span>Prep time: 20-30 min</span>
          </div>

          <Separator className="mb-6" />

          <div className="mb-6">
            <p className="text-3xl font-bold text-primary">{formatPrice(item.price)}</p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus size={16} />
              </Button>
              <span className="w-8 text-center font-semibold text-lg">{quantity}</span>
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full" onClick={() => setQuantity(quantity + 1)}>
                <Plus size={16} />
              </Button>
            </div>
          </div>

          <Button size="lg" className="h-12 rounded-xl text-sm gap-2" onClick={() => {
            for (let i = 0; i < quantity; i++) addItem(item)
            router.push('/cart')
          }}>
            <ShoppingBag size={18} />
            Add to Cart — {formatPrice(item.price * quantity)}
          </Button>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews ({reviews.length})</h2>
        {reviews.length === 0 ? (
          <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Star, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/context/cart-context'
import { formatPrice } from '@/lib/utils'
import type { MenuItem } from '@/types'

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addItem } = useCart()

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/menu/${item.id}`}>
        <div className="relative h-48 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5">
            {item.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-1">
          <Link href={`/menu/${item.id}`}>
            <h3 className="font-semibold text-base hover:text-primary transition-colors">{item.name}</h3>
          </Link>
          <span className="font-bold text-sm text-primary">{formatPrice(item.price)}</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span className="font-medium">{item.rating}</span>
            <span>({item.reviewCount})</span>
          </div>
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              addItem(item)
            }}
            className="h-8 gap-1 rounded-full text-xs"
          >
            <Plus size={14} />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

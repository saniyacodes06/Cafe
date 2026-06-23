'use client'

import { cn } from '@/lib/utils'
import type { Category } from '@/types'

interface CategoryPillsProps {
  categories: Category[]
  selected: string
  onSelect: (slug: string) => void
}

export default function CategoryPills({ categories, selected, onSelect }: CategoryPillsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      <button
        onClick={() => onSelect('all')}
        className={cn(
          'shrink-0 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap',
          selected === 'all'
            ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
            : 'bg-muted text-muted-foreground hover:bg-accent'
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onSelect(cat.slug)}
          className={cn(
            'shrink-0 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap',
            selected === cat.slug
              ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
              : 'bg-muted text-muted-foreground hover:bg-accent'
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}

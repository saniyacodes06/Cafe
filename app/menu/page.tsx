'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { menu as menuApi, categories as categoriesApi } from '@/lib/api'
import type { MenuItem, Category } from '@/types'
import MenuCard from '@/components/features/MenuCard'
import CategoryPills from '@/components/features/CategoryPills'

export default function MenuPage() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [cats, setCats] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([menuApi.list(), categoriesApi.list()])
      .then(([menuData, catData]) => {
        setItems(menuData)
        setCats(catData)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    let result = items
    if (selectedCategory !== 'all') {
      const cat = cats.find(c => c.slug === selectedCategory)
      if (cat) result = result.filter(i => i.categoryId === cat.id)
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(i => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q))
    }
    return result
  }, [items, cats, selectedCategory, searchQuery])

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-muted-foreground">Discover handcrafted flavors made with the finest ingredients.</p>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CategoryPills
              categories={cats}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <div className="relative w-full md:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 rounded-full h-9 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-border overflow-hidden">
                  <div className="aspect-[4/3] bg-muted animate-pulse" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                    <div className="h-3 bg-muted animate-pulse rounded w-full" />
                    <div className="h-4 bg-muted animate-pulse rounded w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No items found. Try a different filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

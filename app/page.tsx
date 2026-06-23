import Link from 'next/link'
import { ArrowRight, Star, ShoppingBag, Coffee, UtensilsCrossed, Pizza, Cake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from '@/lib/constants'
import { menuItems, reviews } from '@/lib/data'
import MenuCard from '@/components/features/MenuCard'

export default function HomePage() {
  const featured = menuItems.filter(item => item.tags.includes('Best Seller')).slice(0, 3)
  const topReviews = reviews.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-20 w-full">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4 text-xs tracking-widest uppercase">Premium Café Experience</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {SITE_TAGLINE}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu">
                <Button size="lg" className="rounded-xl text-sm uppercase tracking-widest h-12 px-8">
                  <ShoppingBag size={18} className="mr-2" />
                  Order Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-xl text-sm uppercase tracking-widest h-12 px-8">
                  Explore Our Story
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                </div>
                <p className="text-muted-foreground">Trusted by 2,000+ food lovers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Categories</span>
            <h2 className="text-3xl font-bold mt-2">Explore Our Menu</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Pizza', icon: Pizza, slug: 'pizza' },
              { name: 'Pasta', icon: UtensilsCrossed, slug: 'pasta' },
              { name: 'Burger', icon: Coffee, slug: 'burger' },
              { name: 'Fries', icon: UtensilsCrossed, slug: 'fries' },
              { name: 'Beverages', icon: Coffee, slug: 'beverages' },
              { name: 'Desserts', icon: Cake, slug: 'desserts' },
            ].map((cat) => {
              const Icon = cat.icon
              return (
                <Link key={cat.slug} href={`/menu?category=${cat.slug}`}>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon size={28} />
                      </div>
                      <span className="text-sm font-semibold">{cat.name}</span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Chef&apos;s Selection</span>
              <h2 className="text-3xl font-bold mt-2">Signature Creations</h2>
            </div>
            <Link href="/menu">
              <Button variant="ghost" className="gap-2">
                View All <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">Testimonials</span>
            <h2 className="text-3xl font-bold mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((review) => (
              <Card key={review.id} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className={i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-primary-foreground/30'} />
                    ))}
                  </div>
                  <p className="text-sm mb-4 text-primary-foreground/80">&ldquo;{review.comment}&rdquo;</p>
                  <p className="text-sm font-semibold">— {review.userName}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary/50 p-10 md:p-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Experience the finest flavors delivered straight to your door. Fresh, fast, and delicious.</p>
            <Link href="/menu">
              <Button size="lg" className="rounded-xl h-12 px-10 text-sm uppercase tracking-widest">
                Browse Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

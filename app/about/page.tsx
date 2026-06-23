import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_NAME } from '@/lib/constants'

export default function AboutPage() {
  return (
    <div>
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Heritage</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Crafting Culinary Experiences</h1>
            <p className="text-lg text-muted-foreground">At {SITE_NAME}, we believe every meal tells a story. From our kitchen to your table, we bring the finest flavors to life.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
              <img src="/placeholder.svg" alt="Our kitchen" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-secondary rounded-full mb-4" />
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a passion for quality and community, FlavorHub started as a small café with a big dream — to make exceptional food accessible to everyone.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every ingredient is carefully sourced, every recipe perfected, and every order prepared with love. We believe in the power of good food to bring people together.
              </p>
              <Link href="/menu">
                <Button className="gap-2">Explore Our Menu <ArrowRight size={16} /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

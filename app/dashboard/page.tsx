import Link from 'next/link'
import { ShoppingBag, MapPin, Star, Settings, LogOut } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SITE_NAME } from '@/lib/constants'

const links = [
  { href: '/dashboard/orders', label: 'My Orders', desc: 'View and track your orders', icon: ShoppingBag },
  { href: '/dashboard/addresses', label: 'My Addresses', desc: 'Manage saved addresses', icon: MapPin },
  { href: '/dashboard/reviews', label: 'My Reviews', desc: 'Reviews you have written', icon: Star },
  { href: '#', label: 'Settings', desc: 'Account preferences', icon: Settings },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">My Dashboard</h1>
        <p className="text-sm text-muted-foreground">Manage your account and orders</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link key={link.href} href={link.href}>
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{link.label}</h3>
                    <p className="text-sm text-muted-foreground">{link.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

import Link from 'next/link'
import { User, Package, MapPin, Star, Settings, LogOut, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const dashboardLinks = [
  { label: 'My Orders', href: '/dashboard/orders', icon: Package, description: 'View and track your orders' },
  { label: 'My Addresses', href: '/dashboard/addresses', icon: MapPin, description: 'Manage saved addresses' },
  { label: 'My Reviews', href: '/dashboard/reviews', icon: Star, description: 'Reviews you have written' },
  { label: 'Settings', href: '#', icon: Settings, description: 'Account preferences' },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      {/* Profile Header */}
      <Card className="mb-8">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-sm text-muted-foreground">john.doe@email.com</p>
            <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <LogOut size={14} /> Sign Out
          </Button>
        </CardContent>
      </Card>

      {/* Dashboard Links */}
      <div className="space-y-3">
        {dashboardLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link key={link.label} href={link.href}>
              <Card className="group cursor-pointer hover:shadow-md transition-all">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{link.label}</p>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

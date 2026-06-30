'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, UtensilsCrossed, ShoppingBag, ClipboardList, User } from 'lucide-react'
import { useCart } from '@/lib/context/cart-context'
import { cn } from '@/lib/utils'

const mobileLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Menu', href: '/menu', icon: UtensilsCrossed },
  { label: 'Book Table', href: '/book-table', icon: UtensilsCrossed },
  { label: 'Cart', href: '/cart', icon: ShoppingBag },
  { label: 'Orders', href: '/orders', icon: ClipboardList },
  { label: 'Profile', href: '/dashboard', icon: User },
]

export default function MobileNav() {
  const pathname = usePathname()
  const { itemCount } = useCart()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background md:hidden">
      <div className="flex items-center justify-around px-2 pb-3 pt-2">
        {mobileLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              <div className="relative">
                <Icon size={20} />
                {link.href === '/cart' && itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

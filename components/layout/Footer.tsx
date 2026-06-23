import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3">{SITE_NAME}</h3>
            <p className="text-sm text-primary-foreground/70 max-w-sm">
              Elevating the flavors of the finest ingredients for the modern palate. 
              Experience premium café cuisine crafted with passion and served with love.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Menu', href: '/menu' },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Shop 5, FlavorHub Plaza</p>
              <p>Old Panvel, Navi Mumbai - 410206</p>
              <p>+91 98765 43210</p>
              <p>hello@flavorhub.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/40">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

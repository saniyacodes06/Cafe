export const SITE_NAME = 'FlavorHub'
export const SITE_TAGLINE = 'A Taste of the Wild, Refined'
export const SITE_DESCRIPTION = 'Experience premium café cuisine crafted from the finest ingredients. Order online for delivery or pickup.'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const

export const ORDER_STATUS_FLOW = ['placed', 'accepted', 'preparing', 'out_for_delivery', 'delivered'] as const

export const ORDER_STATUS_LABELS: Record<string, string> = {
  placed: 'Order Placed',
  accepted: 'Accepted',
  preparing: 'Preparing',
  out_for_delivery: 'Out for Delivery',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
}

export const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI', icon: 'smartphone' },
  { id: 'card', label: 'Credit / Debit Card', icon: 'credit_card' },
  { id: 'netbanking', label: 'Net Banking', icon: 'account_balance' },
  { id: 'cod', label: 'Cash on Delivery', icon: 'payments' },
] as const

export const CUISINE_CATEGORIES = [
  { id: '1', name: 'Pizza', slug: 'pizza', imageUrl: '/placeholder.svg' },
  { id: '2', name: 'Pasta', slug: 'pasta', imageUrl: '/placeholder.svg' },
  { id: '3', name: 'Burger', slug: 'burger', imageUrl: '/placeholder.svg' },
  { id: '4', name: 'Fries', slug: 'fries', imageUrl: '/placeholder.svg' },
  { id: '5', name: 'Beverages', slug: 'beverages', imageUrl: '/placeholder.svg' },
  { id: '6', name: 'Desserts', slug: 'desserts', imageUrl: '/placeholder.svg' },
] as const

export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: 'customer' | 'admin'
  createdAt: string
}

export interface Address {
  id: string
  userId: string
  title: string
  fullAddress: string
  city: string
  state: string
  pincode: string
  landmark?: string
  isDefault: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  imageUrl: string
}

export interface MenuItem {
  id: string
  categoryId: string
  categoryName: string
  name: string
  description: string
  price: number
  imageUrl: string
  isAvailable: boolean
  rating: number
  reviewCount: number
  tags: string[]
}

export interface CartItem {
  id: string
  menuItemId: string
  name: string
  price: number
  quantity: number
  imageUrl: string
}

export interface Order {
  id: string
  userId: string
  addressId: string
  items: OrderItem[]
  totalAmount: number
  paymentStatus: 'pending' | 'paid' | 'failed'
  orderStatus: 'placed' | 'accepted' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'
  createdAt: string
  deliveryAddress: Address
  paymentMethod: string
}

export interface OrderItem {
  id: string
  menuItemId: string
  name: string
  quantity: number
  itemPrice: number
  imageUrl: string
}

export interface Payment {
  id: string
  orderId: string
  razorpayPaymentId?: string
  amount: number
  status: 'pending' | 'paid' | 'failed'
  paidAt?: string
}

export interface Review {
  id: string
  userId: string
  userName: string
  menuItemId: string
  menuItemName: string
  rating: number
  comment: string
  createdAt: string
}

'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Utensils, Table, User, ChevronDown, ChevronUp, Loader2 } from 'lucide-react'
import { format, formatDistanceToNow, parseISO } from 'date-fns'

interface Order {
  id: string
  orderRef: string
  totalAmount: number
  paymentStatus: string
  orderStatus: string
  paymentMethod: string
  createdAt: string
  items: Array<{
    menuItem: { name: string; imageUrl: string | null }
    quantity: number
    itemPrice: number
  }>
  deliveryAddress?: { fullAddress: string; city: string; pincode: string } | null
}

interface TableBooking {
  id: number
  bookingDate: string
  bookingTime: string
  partySize: number
  status: string
  table: {
    tableNumber: number
    type: string
    capacity: number
  }
  createdAt: string
}

interface UserProfile {
  id: number
  name: string
  email: string
  phone: string | null
  createdAt: string
}

export default function ProfilePage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [bookings, setBookings] = useState<TableBooking[]>([])
  const [user, setUser] = useState<UserProfile | null>(null)
  const [activeTab, setActiveTab] = useState('orders')
  const [loading, setLoading] = useState(true)
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null)

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    try {
      const [userRes, ordersRes, bookingsRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch('/api/orders'),
        fetch('/api/table-bookings'),
      ])

      if (userRes.ok) {
        const data = await userRes.json()
        setUser(data.user)
      }
      if (ordersRes.ok) {
        const data = await ordersRes.json()
        setOrders(data.orders || [])
      }
      if (bookingsRes.ok) {
        const data = await bookingsRes.json()
        setBookings(data.bookings || [])
      }
    } catch (e) {
      console.error('Failed to fetch profile:', e)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
      case 'confirmed':
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'preparing':
      case 'out_for_delivery':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Number(amount))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your orders, table bookings, and account settings</p>
      </div>

      {user && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                {user.phone && <p className="text-muted-foreground text-sm">{user.phone}</p>}
                <p className="text-xs text-muted-foreground mt-1">Member since {format(parseISO(user.createdAt), 'MMM yyyy')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="orders">
            <Utensils className="mr-2 h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="bookings">
            <Table className="mr-2 h-4 w-4" />
            Table Bookings
          </TabsTrigger>
          <TabsTrigger value="settings">
            <User className="mr-2 h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          {orders.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Utensils className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-4">Start exploring our menu and place your first order!</p>
                <Button asChild>
                  <a href="/menu">Browse Menu</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            orders.map((order) => (
              <Card key={order.id}>
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-lg font-semibold">#{order.orderRef}</span>
                      <Badge variant="secondary" className="ml-2">{formatCurrency(order.totalAmount)}</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(order.orderStatus)}>{order.orderStatus.replace('_', ' ')}</Badge>
                      <Badge variant="outline">{order.paymentStatus}</Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                      >
                        {expandedOrder === order.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Order Date</p>
                      <p>{formatDistanceToNow(parseISO(order.createdAt), { addSuffix: true })}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Payment</p>
                      <p className="capitalize">{order.paymentMethod}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Delivery</p>
                      <p>{order.deliveryAddress ? `${order.deliveryAddress.fullAddress}, ${order.deliveryAddress.city} - ${order.deliveryAddress.pincode}` : 'Dine-in / Pickup'}</p>
                    </div>
                  </div>

                  {expandedOrder === order.id && (
                    <div className="border-t pt-4 space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 py-2 border-b last:border-0">
                          <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                            {item.menuItem.imageUrl ? (
                              <img src={item.menuItem.imageUrl} alt={item.menuItem.name} className="w-full h-full object-cover" />
                            ) : (
                              <Utensils className="h-6 w-6 text-muted-foreground" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{item.menuItem.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity} × {formatCurrency(item.itemPrice.toString())}</p>
                          </div>
                          <p className="font-semibold">{formatCurrency((item.itemPrice * item.quantity).toString())}</p>
                        </div>
                      ))}
                      <div className="flex justify-end gap-4 text-sm">
                        <span>Total: <span className="font-bold">{formatCurrency(order.totalAmount.toString())}</span></span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="bookings" className="space-y-4">
          {bookings.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Table className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No table bookings</h3>
                <p className="text-muted-foreground mb-4">Reserve a table for dine-in and get 15% off your order!</p>
                <Button asChild>
                  <a href="/book-table">Book a Table</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            bookings.map((booking) => (
              <Card key={booking.id} className={booking.status === 'completed' ? 'opacity-60' : ''}>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Table className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Table #{booking.table.tableNumber}</p>
                        <p className="text-sm text-muted-foreground capitalize">{booking.table.type} table • Seats {booking.table.capacity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{format(parseISO(booking.bookingDate), 'MMM dd, yyyy')}</p>
                      <p className="text-sm text-muted-foreground">{booking.bookingTime}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Party of {booking.partySize}</p>
                    </div>
                    {booking.status === 'confirmed' && (
                      <Button variant="outline" size="sm" onClick={() => cancelBooking(booking.id)}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">Full Name</label>
                  <input type="text" defaultValue={user?.name || ''} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" disabled />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input type="email" defaultValue={user?.email || ''} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" disabled />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Phone</label>
                <input type="tel" defaultValue={user?.phone || ''} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

async function cancelBooking(bookingId: number) {
  if (!confirm('Are you sure you want to cancel this booking?')) return
  const res = await fetch(`/api/table-bookings/${bookingId}`, { method: 'DELETE' })
  if (res.ok) {
    window.location.reload()
  } else {
    alert('Failed to cancel booking')
  }
}
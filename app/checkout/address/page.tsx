'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Check, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function AddressPage() {
  const router = useRouter()
  const [selectedAddress, setSelectedAddress] = useState('1')
  const [showAddForm, setShowAddForm] = useState(false)

  const savedAddresses = [
    { id: '1', title: 'Home', fullAddress: 'Plot No. 7, Sector 3', city: 'Old Panvel', state: 'Maharashtra', pincode: '410206', landmark: 'Near Panvel Station' },
    { id: '2', title: 'Work', fullAddress: 'Shop No. 12, Panvel Mafco Market', city: 'Old Panvel', state: 'Maharashtra', pincode: '410206', landmark: 'Near Old Panvel Bus Stand' },
  ]

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <Button variant="ghost" asChild className="mb-6 gap-2">
        <Link href="/checkout"><ArrowLeft size={16} /> Back to Checkout</Link>
      </Button>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Delivery Address</h1>

      <div className="space-y-4">
        {savedAddresses.map((addr) => (
          <Card
            key={addr.id}
            className={cn(
              'cursor-pointer transition-all',
              selectedAddress === addr.id ? 'border-primary ring-2 ring-primary/20' : ''
            )}
            onClick={() => setSelectedAddress(addr.id)}
          >
            <CardContent className="p-4 flex items-start gap-4">
              <div className={cn(
                'mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0',
                selectedAddress === addr.id ? 'border-primary' : 'border-muted-foreground'
              )}>
                {selectedAddress === addr.id && <div className="h-3 w-3 rounded-full bg-primary" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">{addr.title}</h4>
                  {addr.id === '1' && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Default</span>}
                </div>
                <p className="text-sm text-muted-foreground">{addr.fullAddress}</p>
                <p className="text-sm text-muted-foreground">{addr.city}, {addr.state} - {addr.pincode}</p>
                {addr.landmark && <p className="text-sm text-muted-foreground">Landmark: {addr.landmark}</p>}
              </div>
              {selectedAddress === addr.id && <Check size={20} className="text-primary shrink-0" />}
            </CardContent>
          </Card>
        ))}
      </div>

      {!showAddForm ? (
        <Button variant="outline" className="w-full mt-4 gap-2" onClick={() => setShowAddForm(true)}>
          <Plus size={16} /> Add New Address
        </Button>
      ) : (
        <Card className="mt-4">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold">New Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Home, Work, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" placeholder="Enter pincode" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Full Address</Label>
              <Textarea id="address" placeholder="Street, area, building details" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landmark">Landmark</Label>
                <Input id="landmark" placeholder="Optional" />
              </div>
            </div>
            <Button className="w-full">Save Address</Button>
          </CardContent>
        </Card>
      )}

      <Button className="w-full mt-6 h-12 rounded-xl" onClick={() => router.push('/checkout')}>
        Continue with Selected Address
      </Button>
    </div>
  )
}

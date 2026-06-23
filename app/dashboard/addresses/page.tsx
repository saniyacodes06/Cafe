'use client'

import { useState } from 'react'
import { MapPin, Plus, Edit, Trash2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import EmptyState from '@/components/features/EmptyState'

export default function DashboardAddressesPage() {
  const [showForm, setShowForm] = useState(false)
  const savedAddresses = [
    { id: '1', title: 'Home', fullAddress: 'Plot No. 7, Sector 3, Old Panvel, Maharashtra - 410206', landmark: 'Near Panvel Station', isDefault: true },
    { id: '2', title: 'Work', fullAddress: 'Shop No. 12, Panvel Mafco Market, Old Panvel, Maharashtra - 410206', landmark: 'Near Old Panvel Bus Stand', isDefault: false },
  ]

  if (savedAddresses.length === 0 && !showForm) {
    return (
      <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
        <EmptyState icon={MapPin} title="No addresses saved" description="Add an address for faster checkout." actionLabel="Add Address" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Addresses</h1>
        <Button size="sm" className="gap-2" onClick={() => setShowForm(!showForm)}>
          <Plus size={16} /> {showForm ? 'Cancel' : 'Add New'}
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold">New Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="d-title">Title</Label>
                <Input id="d-title" placeholder="Home, Work, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-pincode">Pincode</Label>
                <Input id="d-pincode" placeholder="Enter pincode" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="d-address">Full Address</Label>
              <Textarea id="d-address" placeholder="Street, area, building details" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="d-city">City</Label>
                <Input id="d-city" placeholder="City" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-state">State</Label>
                <Input id="d-state" placeholder="State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-landmark">Landmark</Label>
                <Input id="d-landmark" placeholder="Optional" />
              </div>
            </div>
            <Button className="w-full">Save Address</Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {savedAddresses.map((addr) => (
          <Card key={addr.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{addr.title}</h4>
                    {addr.isDefault && <Badge variant="outline" className="text-[10px] px-2">Default</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{addr.fullAddress}</p>
                  {addr.landmark && <p className="text-sm text-muted-foreground">Landmark: {addr.landmark}</p>}
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

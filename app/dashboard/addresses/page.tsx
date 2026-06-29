'use client'

import { useEffect, useState } from 'react'
import { MapPin, Plus, Edit, Trash2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { address as addressApi } from '@/lib/api'
import EmptyState from '@/components/features/EmptyState'
import type { Address } from '@/types'

export default function DashboardAddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const fetchAddresses = () =>
    addressApi.list().then(setAddresses).catch(() => {}).finally(() => setLoading(false))

  useEffect(() => { fetchAddresses() }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const form = e.target as HTMLFormElement
      const data = {
        title: (form.elements.namedItem('title') as HTMLInputElement).value,
        pincode: (form.elements.namedItem('pincode') as HTMLInputElement).value,
        fullAddress: (form.elements.namedItem('address') as HTMLTextAreaElement).value,
        city: (form.elements.namedItem('city') as HTMLInputElement).value,
        state: (form.elements.namedItem('state') as HTMLInputElement).value,
        landmark: (form.elements.namedItem('landmark') as HTMLInputElement).value,
        isDefault: addresses.length === 0,
      }
      if (editingId) {
        await addressApi.update(editingId, data)
      } else {
        await addressApi.create(data)
      }
      setShowForm(false)
      setEditingId(null)
      fetchAddresses()
    } catch {}
  }

  const handleDelete = async (id: string) => {
    try {
      await addressApi.delete(id)
      fetchAddresses()
    } catch {}
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
        <h1 className="text-2xl font-bold mb-6">My Addresses</h1>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-24 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    )
  }

  if (addresses.length === 0 && !showForm) {
    return (
      <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
        <EmptyState icon={MapPin} title="No addresses saved" description="Add an address for faster checkout." actionLabel="Add Address" onClick={() => setShowForm(true)} />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Addresses</h1>
        <Button size="sm" className="gap-2" onClick={() => { setShowForm(!showForm); setEditingId(null) }}>
          <Plus size={16} /> {showForm ? 'Cancel' : 'Add New'}
        </Button>
      </div>

      {showForm && (
        <Card className="mb-6">
          <form onSubmit={handleSave}>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">{editingId ? 'Edit Address' : 'New Address'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="d-title">Title</Label>
                  <Input id="d-title" name="title" placeholder="Home, Work, etc." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="d-pincode">Pincode</Label>
                  <Input id="d-pincode" name="pincode" placeholder="Enter pincode" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-address">Full Address</Label>
                <Textarea id="d-address" name="address" placeholder="Street, area, building details" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="d-city">City</Label>
                  <Input id="d-city" name="city" placeholder="City" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="d-state">State</Label>
                  <Input id="d-state" name="state" placeholder="State" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="d-landmark">Landmark</Label>
                  <Input id="d-landmark" name="landmark" placeholder="Optional" />
                </div>
              </div>
              <Button type="submit" className="w-full">Save Address</Button>
            </CardContent>
          </form>
        </Card>
      )}

      <div className="space-y-4">
        {addresses.map((addr) => (
          <Card key={addr.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{addr.title}</h4>
                    {addr.isDefault && <Badge variant="outline" className="text-[10px] px-2">Default</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{addr.fullAddress}, {addr.city}, {addr.state} - {addr.pincode}</p>
                  {addr.landmark && <p className="text-sm text-muted-foreground">Landmark: {addr.landmark}</p>}
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleDelete(addr.id)}>
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

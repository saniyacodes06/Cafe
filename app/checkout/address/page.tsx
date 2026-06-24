'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Check, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { address as addressApi } from '@/lib/api'
import type { Address } from '@/types'

export default function AddressPage() {
  const router = useRouter()
  const [addresses, setAddresses] = useState<Address[]>([])
  const [selectedAddress, setSelectedAddress] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    addressApi.list()
      .then((data) => {
        setAddresses(data)
        const defaultAddr = data.find(a => a.isDefault) || data[0]
        if (defaultAddr) setSelectedAddress(defaultAddr.id)
      })
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const title = (form.elements.namedItem('title') as HTMLInputElement).value
    const pincode = (form.elements.namedItem('pincode') as HTMLInputElement).value
    const fullAddress = (form.elements.namedItem('address') as HTMLTextAreaElement).value
    const city = (form.elements.namedItem('city') as HTMLInputElement).value
    const state = (form.elements.namedItem('state') as HTMLInputElement).value
    const landmark = (form.elements.namedItem('landmark') as HTMLInputElement).value
    await addressApi.create({ title, pincode, fullAddress, city, state, landmark })
    const updated = await addressApi.list()
    setAddresses(updated)
    setShowAddForm(false)
  }

  return (
    <div className="mx-auto max-w-[800px] px-4 md:px-10 py-8">
      <Button variant="ghost" asChild className="mb-6 gap-2">
        <Link href="/checkout"><ArrowLeft size={16} /> Back to Checkout</Link>
      </Button>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">Delivery Address</h1>

      {loading ? (
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-24 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {addresses.map((addr) => (
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
                    {addr.isDefault && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Default</span>}
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
      )}

      {!showAddForm ? (
        <Button variant="outline" className="w-full mt-4 gap-2" onClick={() => setShowAddForm(true)}>
          <Plus size={16} /> Add New Address
        </Button>
      ) : (
        <Card className="mt-4">
          <form onSubmit={handleSave}>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">New Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" placeholder="Home, Work, etc." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input id="pincode" name="pincode" placeholder="Enter pincode" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Full Address</Label>
                <Textarea id="address" name="address" placeholder="Street, area, building details" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" placeholder="City" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" name="state" placeholder="State" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="landmark">Landmark</Label>
                  <Input id="landmark" name="landmark" placeholder="Optional" />
                </div>
              </div>
              <Button type="submit" className="w-full">Save Address</Button>
            </CardContent>
          </form>
        </Card>
      )}

      <Button className="w-full mt-6 h-12 rounded-xl" onClick={() => {
        if (selectedAddress) router.push(`/checkout?addressId=${selectedAddress}`)
      }}>
        Continue with Selected Address
      </Button>
    </div>
  )
}

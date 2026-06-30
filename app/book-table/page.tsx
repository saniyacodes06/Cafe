'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, Users, CheckCircle, XCircle, AlertCircle, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { format, addDays, parseISO, startOfDay } from 'date-fns'

interface Table {
  id: number
  tableNumber: number
  type: 'single' | 'couple' | 'family'
  capacity: number
  status: string
  available?: boolean
}

interface TimeSlot {
  time: string
  label: string
}

const TIME_SLOTS: TimeSlot[] = [
  { time: '11:00', label: '11:00 AM' },
  { time: '11:30', label: '11:30 AM' },
  { time: '12:00', label: '12:00 PM' },
  { time: '12:30', label: '12:30 PM' },
  { time: '13:00', label: '1:00 PM' },
  { time: '13:30', label: '1:30 PM' },
  { time: '14:00', label: '2:00 PM' },
  { time: '14:30', label: '2:30 PM' },
  { time: '15:00', label: '3:00 PM' },
  { time: '15:30', label: '3:30 PM' },
  { time: '16:00', label: '4:00 PM' },
  { time: '16:30', label: '4:30 PM' },
  { time: '17:00', label: '5:00 PM' },
  { time: '17:30', label: '5:30 PM' },
  { time: '18:00', label: '6:00 PM' },
  { time: '18:30', label: '6:30 PM' },
  { time: '19:00', label: '7:00 PM' },
  { time: '19:30', label: '7:30 PM' },
  { time: '20:00', label: '8:00 PM' },
  { time: '20:30', label: '8:30 PM' },
  { time: '21:00', label: '9:00 PM' },
  { time: '21:30', label: '9:30 PM' },
]

const TABLE_TYPE_LABELS: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  single: { label: 'Single (1 person)', icon: Users, color: 'bg-blue-100 text-blue-800' },
  couple: { label: 'Couple (2 people)', icon: Users, color: 'bg-pink-100 text-pink-800' },
  family: { label: 'Family (4-8 people)', icon: Users, color: 'bg-green-100 text-green-800' },
}

export default function BookTablePage() {
  const [selectedDate, setSelectedDate] = useState(() => format(new Date(), 'yyyy-MM-dd'))
  const [selectedTime, setSelectedTime] = useState('12:00')
  const [selectedType, setSelectedType] = useState<'single' | 'couple' | 'family' | 'all'>('all')
  const [partySize, setPartySize] = useState(2)
  const [tables, setTables] = useState<Table[]>([])
  const [loading, setLoading] = useState(false)
  const [booking, setBooking] = useState<{ tableNumber: number; type: string; date: string; time: string } | null>(null)
  const [error, setError] = useState('')

  const minDate = format(startOfDay(new Date()), 'yyyy-MM-dd')
  const maxDate = format(addDays(new Date(), 30), 'yyyy-MM-dd')

  useEffect(() => {
    fetchTables()
  }, [selectedDate, selectedTime, selectedType])

  async function fetchTables() {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams({
        date: selectedDate,
        startTime: selectedTime,
        endTime: format(addDays(parseISO(selectedDate), 1), 'HH:mm'),
      })
      if (selectedType !== 'all') params.append('type', selectedType)

      const res = await fetch(`/api/table-bookings/availability?${params}`)
      const data = await res.json()
      if (res.ok) {
        setTables(data.tables || [])
      } else {
        setError(data.error || 'Failed to fetch tables')
      }
    } catch (e) {
      setError('Failed to fetch tables')
    } finally {
      setLoading(false)
    }
  }

  async function handleBook(table: Table) {
    setError('')
    try {
      const res = await fetch('/api/table-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tableId: table.id,
          bookingDate: selectedDate,
          bookingTime: selectedTime,
          partySize,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setBooking({
          tableNumber: table.tableNumber,
          type: table.type,
          date: selectedDate,
          time: selectedTime,
        })
      } else {
        setError(data.error || 'Booking failed')
      }
    } catch (e) {
      setError('Booking failed. Please try again.')
    }
  }

  const getTypeInfo = (type: string) => TABLE_TYPE_LABELS[type] || { label: type, icon: Users, color: 'bg-gray-100 text-gray-800' }

  const isPastTime = (time: string) => {
    if (selectedDate !== format(new Date(), 'yyyy-MM-dd')) return false
    const now = new Date()
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    return time <= currentTime
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Book a Table</h1>
        <p className="text-muted-foreground">Reserve your spot and get 15% off your order!</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Booking Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={minDate}
                max={maxDate}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((slot) => (
                    <SelectItem key={slot.time} value={slot.time} disabled={isPastTime(slot.time)}>
                      {slot.label} {isPastTime(slot.time) && '(Past)'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="partySize">Party Size</Label>
              <Select value={String(partySize)} onValueChange={(v) => setPartySize(Number(v))}>
                <SelectTrigger id="partySize">
                  <SelectValue placeholder="Guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} {n === 1 ? 'Guest' : 'Guests'}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Table Type</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {(['all', 'single', 'couple', 'family'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/50'
                  }`}
                >
                  {type === 'all' ? 'All Tables' : getTypeInfo(type).label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      {booking && (
        <div className="mb-6 p-6 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800">Table Booked Successfully!</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><span className="text-green-700 font-medium">Table #{booking.tableNumber}</span></div>
            <div><span className="text-green-700 font-medium capitalize">{booking.type}</span></div>
            <div><span className="text-green-700 font-medium">{format(parseISO(booking.date), 'MMM dd, yyyy')}</span></div>
            <div><span className="text-green-700 font-medium">{booking.time}</span></div>
          </div>
          <p className="text-green-700 mt-3 text-sm">Enjoy 15% off your order when you dine with us!</p>
          <Button asChild className="mt-4">
            <a href="/menu">Order Now</a>
          </Button>
        </div>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Available Tables</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{tables.filter(t => t.available).length} of {tables.length} tables available</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : tables.length === 0 ? (
            <div className="text-center py-12">
              <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No tables available</h3>
              <p className="text-muted-foreground">Try a different time or date</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tables.map((table) => {
                const typeInfo = getTypeInfo(table.type)
                const Icon = typeInfo.icon
                return (
                  <div
                    key={table.id}
                    className={`relative p-4 rounded-xl border-2 transition-all ${
                      table.available
                        ? 'border-transparent hover:border-primary/50 bg-background'
                        : 'border-muted/50 bg-muted/50 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${typeInfo.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-semibold">Table #{table.tableNumber}</span>
                      </div>
                      {table.available ? (
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Available</span>
                      ) : (
                        <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">Booked</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1 capitalize">{typeInfo.label}</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {table.capacity} seats
                      </span>
                    </div>
                    <Button
                      className="w-full"
                      disabled={!table.available}
                      onClick={() => handleBook(table)}
                    >
                      {table.available ? 'Book This Table' : 'Not Available'}
                    </Button>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="mt-6 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-primary">Table Booking Perk</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Book a table and get <span className="font-bold text-primary">15% off</span> your entire order when you dine in!
                The discount is automatically applied at checkout when you have an active booking.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
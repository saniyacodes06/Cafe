import { getAuthUserId } from '@/lib/clerk-auth'
import { db, schema } from '@/lib/db'
import { eq, and, desc } from 'drizzle-orm'

export async function GET() {
  try {
    const userId = await getAuthUserId()
    if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    const bookings = await db
      .select({
        id: schema.tableBookings.id,
        bookingDate: schema.tableBookings.bookingDate,
        bookingTime: schema.tableBookings.bookingTime,
        partySize: schema.tableBookings.partySize,
        status: schema.tableBookings.status,
        createdAt: schema.tableBookings.createdAt,
        table: {
          tableNumber: schema.tables.tableNumber,
          type: schema.tables.type,
          capacity: schema.tables.capacity,
        },
      })
      .from(schema.tableBookings)
      .innerJoin(schema.tables, eq(schema.tableBookings.tableId, schema.tables.id))
      .where(eq(schema.tableBookings.userId, userId))
      .orderBy(desc(schema.tableBookings.createdAt))

    return Response.json({ bookings })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return Response.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getAuthUserId()
    if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    const { tableId, bookingDate, bookingTime, partySize } = await request.json()

    if (!tableId || !bookingDate || !bookingTime || !partySize) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const [table] = await db
      .select()
      .from(schema.tables)
      .where(eq(schema.tables.id, tableId))
      .limit(1)

    if (!table) return Response.json({ error: 'Table not found' }, { status: 404 })
    if (table.capacity < partySize) return Response.json({ error: 'Table capacity too small' }, { status: 400 })

    const existingBooking = await db
      .select()
      .from(schema.tableBookings)
      .where(
        and(
          eq(schema.tableBookings.tableId, tableId),
          eq(schema.tableBookings.bookingDate, bookingDate),
          eq(schema.tableBookings.bookingTime, bookingTime),
          eq(schema.tableBookings.status, 'confirmed')
        )
      )
      .limit(1)

    if (existingBooking.length > 0) {
      return Response.json({ error: 'Table already booked for this time slot' }, { status: 400 })
    }

    const [booking] = await db
      .insert(schema.tableBookings)
      .values({
        userId,
        tableId,
        bookingDate,
        bookingTime,
        partySize,
        status: 'confirmed',
      })
      .returning()

    return Response.json({ booking })
  } catch (error) {
    console.error('Error creating booking:', error)
    return Response.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}
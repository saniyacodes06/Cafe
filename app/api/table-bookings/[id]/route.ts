import { getAuthUserId } from '@/lib/clerk-auth'
import { db, schema } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = await getAuthUserId()
    if (!userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const bookingId = Number(id)

    const [booking] = await db
      .select()
      .from(schema.tableBookings)
      .where(
        and(
          eq(schema.tableBookings.id, bookingId),
          eq(schema.tableBookings.userId, userId)
        )
      )
      .limit(1)

    if (!booking) return Response.json({ error: 'Booking not found' }, { status: 404 })

    if (booking.status !== 'confirmed') {
      return Response.json({ error: 'Cannot cancel this booking' }, { status: 400 })
    }

    await db
      .update(schema.tableBookings)
      .set({ status: 'cancelled' })
      .where(eq(schema.tableBookings.id, bookingId))

    await db
      .update(schema.tables)
      .set({ status: 'available' })
      .where(eq(schema.tables.id, booking.tableId))

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error cancelling booking:', error)
    return Response.json({ error: 'Failed to cancel booking' }, { status: 500 })
  }
}
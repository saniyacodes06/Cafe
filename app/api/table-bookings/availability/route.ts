import { db, schema } from '@/lib/db';
import { ok, bad, serverError } from '@/lib/api-utils';
import { eq, and, gte, lte } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const startTime = searchParams.get('startTime');
    const endTime = searchParams.get('endTime');
    const type = searchParams.get('type');

    if (!date || !startTime || !endTime) {
      return bad('Missing required parameters');
    }

    const start = new Date(`${date}T${startTime}`);
    const end = new Date(`${date}T${endTime}`);

    const whereConditions = [
      eq(schema.tables.status, 'available'),
    ];

    if (type) {
      whereConditions.push(eq(schema.tables.type, type));
    }

    const availableTables = await db
      .select()
      .from(schema.tables)
      .where(and(...whereConditions))
      .orderBy(schema.tables.tableNumber);

    const bookedTableIds = await db
      .select({ tableId: schema.tableBookings.tableId })
      .from(schema.tableBookings)
      .where(
        and(
          eq(schema.tableBookings.status, 'confirmed'),
          gte(schema.tableBookings.bookingDate, start),
          lte(schema.tableBookings.bookingDate, end)
        )
      );

    const bookedIds = new Set(bookedTableIds.map(b => b.tableId));

    const tables = availableTables
      .filter(t => !bookedIds.has(t.id))
      .map(t => ({
        ...t,
        available: !bookedIds.has(t.id),
      }));

    return ok(tables);
  } catch (error) {
    return serverError(error);
  }
}
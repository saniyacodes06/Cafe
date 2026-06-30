import { db, schema } from '@/lib/db';
import { ok, serverError } from '@/lib/api-utils';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const tables = await db.select().from(schema.tables).orderBy(schema.tables.tableNumber);
    return ok(tables);
  } catch (error) {
    return serverError(error);
  }
}
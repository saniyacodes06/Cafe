import { db, schema } from '@/lib/db';
import { ok, serverError } from '@/lib/api-utils';

export async function GET() {
  try {
    const categories = await db.select().from(schema.categories);
    return ok(categories);
  } catch (error) {
    return serverError(error);
  }
}

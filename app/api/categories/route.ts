import { db, schema } from '@/lib/db';
import { ok, serverError } from '@/lib/api-utils';

export async function GET() {
  try {
    const categories = await db.select().from(schema.categories);
    const enriched = categories.map((cat) => ({
      id: String(cat.id),
      name: cat.name,
      slug: cat.slug,
      imageUrl: cat.imageUrl || '/placeholder.svg',
    }));
    return ok(enriched);
  } catch (error) {
    return serverError(error);
  }
}

import { db, schema } from '@/lib/db';
import { ok, serverError } from '@/lib/api-utils';
import { eq, sql } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get('category');

    let items;
    if (categorySlug && categorySlug !== 'all') {
      const [category] = await db
        .select()
        .from(schema.categories)
        .where(eq(schema.categories.slug, categorySlug))
        .limit(1);

      if (!category) {
        items = await db
          .select()
          .from(schema.menuItems)
          .where(eq(schema.menuItems.isAvailable, true));
      } else {
        items = await db
          .select()
          .from(schema.menuItems)
          .where(
            sql`${schema.menuItems.categoryId} = ${category.id} AND ${schema.menuItems.isAvailable} = true`
          );
      }
    } else {
      items = await db
        .select()
        .from(schema.menuItems)
        .where(eq(schema.menuItems.isAvailable, true));
    }

    const categories = await db.select().from(schema.categories);

    const enriched = items.map((item) => {
      const cat = categories.find((c) => c.id === item.categoryId);
      return {
        id: String(item.id),
        categoryId: String(item.categoryId),
        categoryName: cat?.name || '',
        name: item.name,
        description: item.description || '',
        price: Number(item.price),
        imageUrl: item.imageUrl || '/placeholder.svg',
        isAvailable: item.isAvailable,
        rating: 0,
        reviewCount: 0,
        tags: [],
      };
    });

    return ok(enriched);
  } catch (error) {
    return serverError(error);
  }
}

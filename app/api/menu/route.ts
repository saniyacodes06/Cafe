import { db, schema } from '@/lib/db';
import { ok, serverError } from '@/lib/api-utils';
import { eq, sql } from 'drizzle-orm';

const imageMap: Record<string, string> = {
  'Margherita': '/pizza/margarita.jpg',
  'Farmhouse': '/pizza/farmhouse.jpg',
  'Pepperoni': '/pizza/pepperoni.jpg',
  'Veg Supreme': '/pizza/supreme.jpg',
  'White Sauce Pasta': '/pasta/whitesaucepasta.jpg',
  'Red Sauce Pasta': '/pasta/redsaucepasta.jpg',
  'Alfredo Pasta': '/pasta/alfredo.jpg',
  'Veg Burger': '/burger/vegburger.jpg',
  'Chicken Burger': '/burger/chickenburger.jpg',
  'Cheese Burger': '/burger/cheeseburger.jpg',
  'Peri Peri Fries': '/fries/periperifries.jpg',
  'Cheese Fries': '/fries/cheesefries.jpg',
  'Loaded Fries': '/fries/loadedfries.jpg',
  'Cold Coffee': '/beverages/coldcoffee.jpg',
  'Mojito': '/beverages/mojito.jpg',
  'Soft Drinks': '/beverages/softdrink.jpg',
  'Brownie': '/desserts/brownie.jpg',
  'Ice Cream': '/desserts/icecream.jpg',
  'Cheesecake': '/desserts/cheesecake.jpg',
};

function resolveImageUrl(item: { name: string; imageUrl: string | null }): string {
  const stored = item.imageUrl;
  if (stored && stored !== '/placeholder.svg') return stored;
  return imageMap[item.name] || '/placeholder.svg';
}

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
        imageUrl: resolveImageUrl(item),
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

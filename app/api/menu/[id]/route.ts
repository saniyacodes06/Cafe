import { db, schema } from '@/lib/db';
import { ok, notFound, serverError } from '@/lib/api-utils';
import { eq } from 'drizzle-orm';

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

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const itemId = Number(id);

    const [item] = await db
      .select()
      .from(schema.menuItems)
      .where(eq(schema.menuItems.id, itemId))
      .limit(1);

    if (!item) return notFound('Menu item not found');

    const [category] = await db
      .select()
      .from(schema.categories)
      .where(eq(schema.categories.id, item.categoryId))
      .limit(1);

    const reviewsData = await db
      .select({
        id: schema.reviews.id,
        userId: schema.reviews.userId,
        rating: schema.reviews.rating,
        comment: schema.reviews.comment,
        createdAt: schema.reviews.createdAt,
        userName: schema.users.name,
      })
      .from(schema.reviews)
      .where(eq(schema.reviews.menuItemId, itemId))
      .leftJoin(schema.users, eq(schema.reviews.userId, schema.users.id));

    const reviewCount = reviewsData.length;
    const avgRating =
      reviewCount > 0
        ? reviewsData.reduce((sum, r) => sum + r.rating, 0) / reviewCount
        : 0;

    const menuItem = {
      id: String(item.id),
      categoryId: String(item.categoryId),
      categoryName: category?.name || '',
      name: item.name,
      description: item.description || '',
      price: Number(item.price),
      imageUrl: resolveImageUrl(item),
      isAvailable: item.isAvailable,
      rating: Math.round(avgRating * 10) / 10,
      reviewCount,
      tags: [],
    };

    const reviews = reviewsData.map((r) => ({
      id: String(r.id),
      userId: String(r.userId),
      userName: r.userName || 'Anonymous',
      menuItemId: id,
      menuItemName: item.name,
      rating: r.rating,
      comment: r.comment || '',
      createdAt: r.createdAt.toISOString(),
    }));

    return ok({ item: menuItem, reviews });
  } catch (error) {
    return serverError(error);
  }
}

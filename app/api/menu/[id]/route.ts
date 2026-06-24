import { db, schema } from '@/lib/db';
import { ok, notFound, serverError } from '@/lib/api-utils';
import { eq } from 'drizzle-orm';

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
      imageUrl: item.imageUrl || '/placeholder.svg',
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

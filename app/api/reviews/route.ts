import { db, schema } from '@/lib/db';
import { requireAuth, ok, bad, serverError } from '@/lib/api-utils';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const menuItemId = searchParams.get('menuItemId');

    let reviewsData;
    if (menuItemId) {
      reviewsData = await db
        .select({
          id: schema.reviews.id,
          userId: schema.reviews.userId,
          rating: schema.reviews.rating,
          comment: schema.reviews.comment,
          createdAt: schema.reviews.createdAt,
          userName: schema.users.name,
          menuItemId: schema.reviews.menuItemId,
          menuItemName: schema.menuItems.name,
        })
        .from(schema.reviews)
        .where(eq(schema.reviews.menuItemId, Number(menuItemId)))
        .leftJoin(schema.users, eq(schema.reviews.userId, schema.users.id))
        .leftJoin(schema.menuItems, eq(schema.reviews.menuItemId, schema.menuItems.id))
        .orderBy(desc(schema.reviews.createdAt));
    } else {
      reviewsData = await db
        .select({
          id: schema.reviews.id,
          userId: schema.reviews.userId,
          rating: schema.reviews.rating,
          comment: schema.reviews.comment,
          createdAt: schema.reviews.createdAt,
          userName: schema.users.name,
          menuItemId: schema.reviews.menuItemId,
          menuItemName: schema.menuItems.name,
        })
        .from(schema.reviews)
        .leftJoin(schema.users, eq(schema.reviews.userId, schema.users.id))
        .leftJoin(schema.menuItems, eq(schema.reviews.menuItemId, schema.menuItems.id))
        .orderBy(desc(schema.reviews.createdAt));
    }

    const result = reviewsData.map((r) => ({
      id: String(r.id),
      userId: String(r.userId),
      userName: r.userName || 'Anonymous',
      menuItemId: String(r.menuItemId),
      menuItemName: r.menuItemName || '',
      rating: r.rating,
      comment: r.comment || '',
      createdAt: r.createdAt.toISOString(),
    }));

    return ok(result);
  } catch (error) {
    return serverError(error);
  }
}

export async function POST(request: Request) {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const { menuItemId, rating, comment } = await request.json();

    if (!menuItemId || !rating) {
      return bad('menuItemId and rating are required');
    }

    const ratingNum = Number(rating);
    if (ratingNum < 1 || ratingNum > 5) {
      return bad('Rating must be between 1 and 5');
    }

    const [existing] = await db
      .select()
      .from(schema.reviews)
      .where(
        eq(schema.reviews.userId, user.userId) && eq(schema.reviews.menuItemId, Number(menuItemId))
      )
      .limit(1);

    if (existing) {
      return bad('You have already reviewed this item');
    }

    const [review] = await db
      .insert(schema.reviews)
      .values({
        userId: user.userId,
        menuItemId: Number(menuItemId),
        rating: ratingNum,
        comment: comment || null,
      })
      .returning();

    return ok({
      id: String(review.id),
      userId: String(review.userId),
      userName: '',
      menuItemId: String(review.menuItemId),
      menuItemName: '',
      rating: review.rating,
      comment: review.comment || '',
      createdAt: review.createdAt.toISOString(),
    });
  } catch (error) {
    return serverError(error);
  }
}

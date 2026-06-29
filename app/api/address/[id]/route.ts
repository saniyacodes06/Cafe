import { db, schema } from '@/lib/db';
import { requireUserId, ok, bad, notFound, serverError } from '@/lib/api-utils';
import { eq, and } from 'drizzle-orm';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = await requireUserId();
    const { id } = await params;
    const body = await request.json();

    const [existing] = await db
      .select()
      .from(schema.addresses)
      .where(
        and(eq(schema.addresses.id, Number(id)), eq(schema.addresses.userId, userId))
      )
      .limit(1);

    if (!existing) return notFound('Address not found');

    const [updated] = await db
      .update(schema.addresses)
      .set(body)
      .where(eq(schema.addresses.id, Number(id)))
      .returning();

    return ok({
      id: String(updated.id),
      userId: String(updated.userId),
      title: updated.title || '',
      fullAddress: updated.fullAddress,
      city: updated.city,
      state: updated.state,
      pincode: updated.pincode,
      landmark: updated.landmark || '',
      isDefault: updated.isDefault,
    });
  } catch (error) {
    return serverError(error);
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = await requireUserId();
    const { id } = await params;

    const [existing] = await db
      .select()
      .from(schema.addresses)
      .where(
        and(eq(schema.addresses.id, Number(id)), eq(schema.addresses.userId, userId))
      )
      .limit(1);

    if (!existing) return notFound('Address not found');

    await db.delete(schema.addresses).where(eq(schema.addresses.id, Number(id)));

    return ok({ message: 'Address deleted' });
  } catch (error) {
    return serverError(error);
  }
}

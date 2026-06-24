import { db, schema } from '@/lib/db';
import { requireAuth, ok, bad, notFound, serverError } from '@/lib/api-utils';
import { eq, and } from 'drizzle-orm';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const addressId = Number(id);

    const [existing] = await db
      .select()
      .from(schema.addresses)
      .where(
        and(eq(schema.addresses.id, addressId), eq(schema.addresses.userId, user.userId))
      )
      .limit(1);

    if (!existing) return notFound('Address not found');

    const body = await request.json();

    if (body.isDefault) {
      await db
        .update(schema.addresses)
        .set({ isDefault: false })
        .where(eq(schema.addresses.userId, user.userId));
    }

    const [updated] = await db
      .update(schema.addresses)
      .set({
        title: body.title !== undefined ? body.title : existing.title,
        fullAddress: body.fullAddress !== undefined ? body.fullAddress : existing.fullAddress,
        city: body.city !== undefined ? body.city : existing.city,
        state: body.state !== undefined ? body.state : existing.state,
        pincode: body.pincode !== undefined ? body.pincode : existing.pincode,
        landmark: body.landmark !== undefined ? body.landmark : existing.landmark,
        isDefault: body.isDefault !== undefined ? body.isDefault : existing.isDefault,
      })
      .where(eq(schema.addresses.id, addressId))
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
    const { user, error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const addressId = Number(id);

    const [existing] = await db
      .select()
      .from(schema.addresses)
      .where(
        and(eq(schema.addresses.id, addressId), eq(schema.addresses.userId, user.userId))
      )
      .limit(1);

    if (!existing) return notFound('Address not found');

    await db.delete(schema.addresses).where(eq(schema.addresses.id, addressId));

    return ok({ message: 'Address deleted' });
  } catch (error) {
    return serverError(error);
  }
}

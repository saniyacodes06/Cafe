import { db, schema } from '@/lib/db';
import { requireUserId, ok, bad, serverError } from '@/lib/api-utils';
import { eq } from 'drizzle-orm';

const MOCK_ADDRESSES = [
  {
    id: 'mock-1',
    userId: '1',
    title: 'Home',
    fullAddress: '123, MG Road, Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560038',
    landmark: 'Near Indiranagar Metro Station',
    isDefault: true,
  },
  {
    id: 'mock-2',
    userId: '1',
    title: 'Work',
    fullAddress: '456, Brigade Road, Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560034',
    landmark: '5th Block',
    isDefault: false,
  },
]

export async function GET() {
  try {
    const userId = await requireUserId();

    const addresses = await db
      .select()
      .from(schema.addresses)
      .where(eq(schema.addresses.userId, userId));

    if (addresses.length === 0) return ok(MOCK_ADDRESSES);

    const result = addresses.map((a) => ({
      id: String(a.id),
      userId: String(a.userId),
      title: a.title || '',
      fullAddress: a.fullAddress,
      city: a.city,
      state: a.state,
      pincode: a.pincode,
      landmark: a.landmark || '',
      isDefault: a.isDefault,
    }));

    return ok(result);
  } catch (error) {
    return serverError(error);
  }
}

export async function POST(request: Request) {
  try {
    const userId = await requireUserId();

    const { title, fullAddress, city, state, pincode, landmark, isDefault } =
      await request.json();

    if (!fullAddress || !city || !state || !pincode) {
      return bad('fullAddress, city, state, and pincode are required');
    }

    if (isDefault) {
      await db
        .update(schema.addresses)
        .set({ isDefault: false })
        .where(eq(schema.addresses.userId, userId));
    }

    const [addr] = await db
      .insert(schema.addresses)
      .values({
        userId,
        title: title || null,
        fullAddress,
        city,
        state,
        pincode,
        landmark: landmark || null,
        isDefault: isDefault || false,
      })
      .returning();

    return ok({
      id: String(addr.id),
      userId: String(addr.userId),
      title: addr.title || '',
      fullAddress: addr.fullAddress,
      city: addr.city,
      state: addr.state,
      pincode: addr.pincode,
      landmark: addr.landmark || '',
      isDefault: addr.isDefault,
    });
  } catch (error) {
    return serverError(error);
  }
}

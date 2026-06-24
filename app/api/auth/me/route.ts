import { db, schema } from '@/lib/db';
import { getAuthUser } from '@/lib/auth';
import { ok, unauthorized, notFound, serverError } from '@/lib/api-utils';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const auth = await getAuthUser();
    if (!auth) return unauthorized();

    const [user] = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, auth.userId))
      .limit(1);

    if (!user) return notFound('User not found');

    return ok({
      id: String(user.id),
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      role: user.role,
      createdAt: user.createdAt.toISOString(),
    });
  } catch (error) {
    return serverError(error);
  }
}

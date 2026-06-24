import { db, schema } from '@/lib/db';
import { verifyPassword, createToken, setAuthCookie } from '@/lib/auth';
import { ok, bad, serverError } from '@/lib/api-utils';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return bad('Email and password are required');
    }

    const [user] = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .limit(1);

    if (!user) {
      return bad('Invalid email or password');
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return bad('Invalid email or password');
    }

    const token = createToken({ userId: user.id, role: user.role });
    await setAuthCookie(token);

    return ok({
      user: {
        id: String(user.id),
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        role: user.role,
        createdAt: user.createdAt.toISOString(),
      },
    });
  } catch (error) {
    return serverError(error);
  }
}

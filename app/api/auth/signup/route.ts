import { db, schema } from '@/lib/db';
import { hashPassword, createToken, setAuthCookie } from '@/lib/auth';
import { ok, bad, created, serverError } from '@/lib/api-utils';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const { name, email, phone, password } = await request.json();

    if (!name || !email || !password) {
      return bad('Name, email, and password are required');
    }

    if (password.length < 6) {
      return bad('Password must be at least 6 characters');
    }

    const existingUser = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      return bad('Email already registered');
    }

    const passwordHash = await hashPassword(password);

    const [user] = await db
      .insert(schema.users)
      .values({ name, email, phone: phone || null, passwordHash })
      .returning();

    const token = createToken({ userId: user.id, role: user.role });
    await setAuthCookie(token);

    return created({
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

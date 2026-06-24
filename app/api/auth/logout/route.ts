import { clearAuthCookie } from '@/lib/auth';
import { ok, serverError } from '@/lib/api-utils';

export async function POST() {
  try {
    await clearAuthCookie();
    return ok({ message: 'Logged out' });
  } catch (error) {
    return serverError(error);
  }
}

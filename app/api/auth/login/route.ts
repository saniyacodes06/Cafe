import { ok, serverError } from '@/lib/api-utils';

export async function POST() {
  try {
    return ok({ message: 'Use Clerk sign-in instead' });
  } catch (error) {
    return serverError(error);
  }
}

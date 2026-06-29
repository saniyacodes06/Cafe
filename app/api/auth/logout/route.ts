import { ok, serverError } from '@/lib/api-utils';

export async function POST() {
  try {
    return ok({ message: 'Use Clerk sign-out instead' });
  } catch (error) {
    return serverError(error);
  }
}

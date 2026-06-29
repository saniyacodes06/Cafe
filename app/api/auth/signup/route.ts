import { ok, serverError } from '@/lib/api-utils';

export async function POST() {
  try {
    return ok({ message: 'Use Clerk sign-up instead' });
  } catch (error) {
    return serverError(error);
  }
}

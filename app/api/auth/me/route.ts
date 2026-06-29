import { currentUser } from '@clerk/nextjs/server'
import { ok, notFound, serverError } from '@/lib/api-utils'

export async function GET() {
  try {
    const clerkUser = await currentUser()
    if (!clerkUser) return notFound('User not found')

    return ok({
      id: clerkUser.id,
      name: clerkUser.fullName || clerkUser.firstName || 'User',
      email: clerkUser.primaryEmailAddress?.emailAddress || '',
      phone: clerkUser.primaryPhoneNumber?.phoneNumber || '',
      role: 'customer',
      createdAt: clerkUser.createdAt?.toISOString() || new Date().toISOString(),
    })
  } catch (error) {
    return serverError(error)
  }
}

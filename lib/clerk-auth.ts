import { auth } from '@clerk/nextjs/server'
import { db, schema } from './db'
import { eq } from 'drizzle-orm'

export async function getAuthUserId(): Promise<number | null> {
  const { userId: clerkId } = await auth()
  if (!clerkId) return null

  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.clerkId, clerkId))
    .limit(1)

  if (user) return user.id

  const clerkUser = await (await import('@clerk/nextjs/server')).currentUser()
  const email = clerkUser?.emailAddresses?.[0]?.emailAddress || ''
  const name = clerkUser?.fullName || clerkUser?.firstName || 'User'

  const [newUser] = await db
    .insert(schema.users)
    .values({
      clerkId,
      name,
      email,
      passwordHash: '',
    })
    .returning()

  return newUser.id
}

export async function requireUserId(): Promise<number> {
  const id = await getAuthUserId()
  if (!id) throw new Error('Unauthorized')
  return id
}

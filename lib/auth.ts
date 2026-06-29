import { auth } from '@clerk/nextjs/server'
import { db, schema } from './db'
import { eq } from 'drizzle-orm'

export async function getAuthUser() {
  const { userId: clerkId } = await auth()
  if (!clerkId) return null

  const [user] = await db
    .select()
    .from(schema.users)
    .where(eq(schema.users.clerkId, clerkId))
    .limit(1)

  if (!user) return null
  return { userId: user.id, role: user.role }
}

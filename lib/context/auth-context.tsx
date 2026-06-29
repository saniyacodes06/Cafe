'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { useUser, useClerk } from '@clerk/nextjs'
import type { User } from '@/types'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string, phone?: string) => Promise<void>
  logout: () => Promise<void>
  refresh: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isLoaded, isSignedIn, user: clerkUser } = useUser()
  const clerk = useClerk()

  const user: User | null = isSignedIn && clerkUser
    ? {
        id: clerkUser.id,
        name: clerkUser.fullName || clerkUser.firstName || 'User',
        email: clerkUser.primaryEmailAddress?.emailAddress || '',
        phone: clerkUser.primaryPhoneNumber?.phoneNumber || '',
        role: 'customer',
        createdAt: clerkUser.createdAt?.toISOString() || new Date().toISOString(),
      }
    : null

  const login = async () => { clerk.openSignIn() }
  const signup = async () => { clerk.openSignUp() }
  const logout = async () => { clerk.signOut() }
  const refresh = async () => {}

  return (
    <AuthContext.Provider value={{ user, loading: !isLoaded, login, signup, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price)
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(dateString))
}

export function calculateCartTotal(items: { price: number; quantity: number }[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 11)
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    placed: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950',
    accepted: 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950',
    preparing: 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950',
    out_for_delivery: 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-950',
    delivered: 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950',
    cancelled: 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-950',
  }
  return colors[status] || 'text-gray-600 bg-gray-50'
}

export function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

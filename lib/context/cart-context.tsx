'use client'

import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import type { CartItem, MenuItem } from '@/types'
import { toast } from 'sonner'
import { cart as cartApi } from '@/lib/api'

interface CartState {
  items: CartItem[]
  loading: boolean
}

type CartAction =
  | { type: 'SET_ITEMS'; payload: CartItem[] }
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_LOADING'; payload: boolean }

interface CartContextType {
  items: CartItem[]
  itemCount: number
  loading: boolean
  addItem: (item: MenuItem) => Promise<void>
  removeItem: (id: string) => Promise<void>
  updateQuantity: (id: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  refreshCart: () => Promise<void>
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload, loading: false }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.menuItemId === action.payload.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.menuItemId === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      toast.success(`${action.payload.name} added to cart`)
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            menuItemId: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
            imageUrl: action.payload.imageUrl,
          },
        ],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.menuItemId !== action.payload),
      }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(i => i.menuItemId !== action.payload.id),
        }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.menuItemId === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], loading: true })

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

  const refreshCart = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const data = await cartApi.get()
      const items: CartItem[] = data.items.map((i: { menuItemId: string | number; name: string; price: string | number; quantity: number; imageUrl: string }) => ({
        id: String(i.menuItemId),
        menuItemId: String(i.menuItemId),
        name: i.name,
        price: i.price,
        quantity: i.quantity,
        imageUrl: i.imageUrl,
      }))
      dispatch({ type: 'SET_ITEMS', payload: items })
    } catch {
      dispatch({ type: 'SET_ITEMS', payload: [] })
    }
  }

  useEffect(() => {
    refreshCart()
  }, [])

  const addItem = async (item: MenuItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
    try {
      await cartApi.add(item.id)
    } catch {
      toast.error('Failed to sync cart')
    }
  }

  const removeItem = async (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
    try {
      await cartApi.remove(id)
    } catch {
      toast.error('Failed to remove item')
    }
  }

  const updateQuantity = async (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
    try {
      await cartApi.update(id, quantity)
    } catch {
      toast.error('Failed to update quantity')
      refreshCart()
    }
  }

  const clearCart = async () => {
    dispatch({ type: 'CLEAR_CART' })
    try {
      const data = await cartApi.get()
      for (const item of data.items) {
        await cartApi.remove(String(item.menuItemId))
      }
    } catch {
      // ignore
    }
  }

  return (
    <CartContext.Provider value={{ items: state.items, itemCount, loading: state.loading, addItem, removeItem, updateQuantity, clearCart, refreshCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

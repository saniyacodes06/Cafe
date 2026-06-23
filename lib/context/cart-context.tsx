'use client'

import { createContext, useContext, useReducer, type ReactNode } from 'react'
import type { CartItem, MenuItem } from '@/types'

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

interface CartContextType {
  items: CartItem[]
  itemCount: number
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.menuItemId === action.payload.id)
      if (existing) {
        return {
          items: state.items.map(i =>
            i.menuItemId === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return {
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
        items: state.items.filter(i => i.menuItemId !== action.payload),
      }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          items: state.items.filter(i => i.menuItemId !== action.payload.id),
        }
      }
      return {
        items: state.items.map(i =>
          i.menuItemId === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      }
    }
    case 'CLEAR_CART':
      return { items: [] }
    default:
      return state
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

  const addItem = (item: MenuItem) => dispatch({ type: 'ADD_ITEM', payload: item })
  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider value={{ items: state.items, itemCount, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

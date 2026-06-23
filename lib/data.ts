import type { MenuItem, Category, Review, Address, Order } from './types'

export const categories: Category[] = [
  { id: '1', name: 'Pizza', slug: 'pizza', imageUrl: '/placeholder.svg' },
  { id: '2', name: 'Pasta', slug: 'pasta', imageUrl: '/placeholder.svg' },
  { id: '3', name: 'Burger', slug: 'burger', imageUrl: '/placeholder.svg' },
  { id: '4', name: 'Fries', slug: 'fries', imageUrl: '/placeholder.svg' },
  { id: '5', name: 'Beverages', slug: 'beverages', imageUrl: '/placeholder.svg' },
  { id: '6', name: 'Desserts', slug: 'desserts', imageUrl: '/placeholder.svg' },
]

export const menuItems: MenuItem[] = [
  { id: '1', categoryId: '1', categoryName: 'Pizza', name: 'Margherita', description: 'Classic tomato sauce, fresh mozzarella, and basil on a perfectly baked crust.', price: 12.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.5, reviewCount: 128, tags: ['Vegetarian', 'Best Seller'] },
  { id: '2', categoryId: '1', categoryName: 'Pizza', name: 'Farmhouse', description: 'Loaded with bell peppers, mushrooms, onions, olives, and sweet corn.', price: 15.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.3, reviewCount: 95, tags: ['Vegetarian', 'Popular'] },
  { id: '3', categoryId: '1', categoryName: 'Pizza', name: 'Pepperoni', description: 'Loaded with generous portions of spicy pepperoni and melted mozzarella.', price: 14.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.7, reviewCount: 210, tags: ['Non-Vegetarian', 'Best Seller'] },
  { id: '4', categoryId: '1', categoryName: 'Pizza', name: 'Veg Supreme', description: 'An extravagant medley of seasonal vegetables on a bed of rich tomato sauce.', price: 16.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.4, reviewCount: 76, tags: ['Vegetarian', 'Premium'] },
  { id: '5', categoryId: '2', categoryName: 'Pasta', name: 'White Sauce Pasta', description: 'Creamy Alfredo sauce with garlic, parmesan, and penne tossed to perfection.', price: 11.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.6, reviewCount: 156, tags: ['Vegetarian'] },
  { id: '6', categoryId: '2', categoryName: 'Pasta', name: 'Red Sauce Pasta', description: 'Tangy arrabiata sauce with cherry tomatoes, basil, and al dente spaghetti.', price: 10.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.2, reviewCount: 88, tags: ['Vegetarian', 'Spicy'] },
  { id: '7', categoryId: '2', categoryName: 'Pasta', name: 'Alfredo Pasta', description: 'Rich and creamy Alfredo with mushrooms, broccoli, and grilled chicken.', price: 13.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.5, reviewCount: 134, tags: ['Non-Vegetarian', 'Popular'] },
  { id: '8', categoryId: '3', categoryName: 'Burger', name: 'Veg Burger', description: 'Crispy vegetable patty with fresh lettuce, tomato, and our signature sauce.', price: 8.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.1, reviewCount: 67, tags: ['Vegetarian'] },
  { id: '9', categoryId: '3', categoryName: 'Burger', name: 'Chicken Burger', description: 'Juicy grilled chicken breast with bacon, cheddar, and smoky barbecue sauce.', price: 10.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.4, reviewCount: 112, tags: ['Non-Vegetarian', 'Popular'] },
  { id: '10', categoryId: '3', categoryName: 'Burger', name: 'Cheese Burger', description: 'Double cheese, caramelized onions, and a perfectly seared beef patty.', price: 11.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.6, reviewCount: 189, tags: ['Non-Vegetarian', 'Best Seller'] },
  { id: '11', categoryId: '4', categoryName: 'Fries', name: 'Peri Peri Fries', description: 'Crispy golden fries tossed in our signature peri peri seasoning.', price: 5.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.3, reviewCount: 145, tags: ['Vegetarian', 'Spicy'] },
  { id: '12', categoryId: '4', categoryName: 'Fries', name: 'Cheese Fries', description: 'Loaded with melted cheddar, mozzarella, and a drizzle of ranch.', price: 7.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.5, reviewCount: 178, tags: ['Vegetarian', 'Popular'] },
  { id: '13', categoryId: '4', categoryName: 'Fries', name: 'Loaded Fries', description: 'Topped with pulled chicken, jalapeños, sour cream, and guacamole.', price: 9.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.7, reviewCount: 201, tags: ['Non-Vegetarian', 'Best Seller'] },
  { id: '14', categoryId: '5', categoryName: 'Beverages', name: 'Cold Coffee', description: 'Chilled brewed coffee blended with milk, ice, and a hint of vanilla.', price: 4.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.4, reviewCount: 167, tags: ['Beverage', 'Popular'] },
  { id: '15', categoryId: '5', categoryName: 'Beverages', name: 'Mojito', description: 'Refreshing mint and lime mojito with a splash of soda water.', price: 5.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.2, reviewCount: 89, tags: ['Beverage', 'Refreshing'] },
  { id: '16', categoryId: '5', categoryName: 'Beverages', name: 'Soft Drinks', description: 'Choice of Coca-Cola, Sprite, or Fanta served chilled with ice.', price: 2.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.0, reviewCount: 45, tags: ['Beverage'] },
  { id: '17', categoryId: '6', categoryName: 'Desserts', name: 'Brownie', description: 'Warm, fudgy chocolate brownie served with a scoop of vanilla ice cream.', price: 6.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.8, reviewCount: 234, tags: ['Dessert', 'Best Seller'] },
  { id: '18', categoryId: '6', categoryName: 'Desserts', name: 'Ice Cream', description: 'Creamy handmade ice cream available in chocolate, vanilla, and strawberry.', price: 4.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.3, reviewCount: 98, tags: ['Dessert', 'Vegetarian'] },
  { id: '19', categoryId: '6', categoryName: 'Desserts', name: 'Cheesecake', description: 'New York style cheesecake with a buttery graham cracker crust.', price: 7.99, imageUrl: '/placeholder.svg', isAvailable: true, rating: 4.6, reviewCount: 156, tags: ['Dessert', 'Premium'] },
]

export const reviews: Review[] = [
  { id: '1', userId: '1', userName: 'Sarah M.', menuItemId: '1', menuItemName: 'Margherita', rating: 5, comment: 'Absolutely divine! The crust is perfectly thin and crispy. Best margherita in town.', createdAt: '2024-12-15T18:30:00Z' },
  { id: '2', userId: '2', userName: 'James R.', menuItemId: '3', menuItemName: 'Pepperoni', rating: 5, comment: 'The pepperoni is high quality and plentiful. A true classic done right.', createdAt: '2024-12-14T19:15:00Z' },
  { id: '3', userId: '3', userName: 'Emily K.', menuItemId: '10', menuItemName: 'Cheese Burger', rating: 4, comment: 'Juicy, flavorful, and the cheese is perfectly melted. Could use more sauce.', createdAt: '2024-12-13T20:00:00Z' },
  { id: '4', userId: '4', userName: 'Michael T.', menuItemId: '13', menuItemName: 'Loaded Fries', rating: 5, comment: 'These loaded fries are addictive! Perfect for sharing... or not.', createdAt: '2024-12-12T21:30:00Z' },
  { id: '5', userId: '5', userName: 'Anna L.', menuItemId: '17', menuItemName: 'Brownie', rating: 5, comment: 'The brownie is rich, gooey, and absolutely heavenly with the ice cream.', createdAt: '2024-12-11T22:00:00Z' },
  { id: '6', userId: '6', userName: 'David P.', menuItemId: '7', menuItemName: 'Alfredo Pasta', rating: 4, comment: 'Creamy and delicious. The chicken is tender and perfectly seasoned.', createdAt: '2024-12-10T18:45:00Z' },
  { id: '7', userId: '7', userName: 'Lisa W.', menuItemId: '14', menuItemName: 'Cold Coffee', rating: 4, comment: 'Perfectly chilled and not too sweet. Great coffee kick!', createdAt: '2024-12-09T16:30:00Z' },
  { id: '8', userId: '8', userName: 'Tom H.', menuItemId: '5', menuItemName: 'White Sauce Pasta', rating: 5, comment: 'The creamiest pasta I have ever had. Absolutely love it!', createdAt: '2024-12-08T19:00:00Z' },
]

export const addresses: Address[] = [
  { id: '1', userId: '1', title: 'Home', fullAddress: '42 Manor Street', city: 'New York', state: 'NY', pincode: '10012', landmark: 'Near Central Park', isDefault: true },
  { id: '2', userId: '1', title: 'Work', fullAddress: '350 Fifth Avenue', city: 'New York', state: 'NY', pincode: '10118', landmark: 'Empire State Building', isDefault: false },
]

export const orders: Order[] = [
  {
    id: 'ORD-001', userId: '1', addressId: '1',
    items: [{ id: '1', menuItemId: '3', name: 'Pepperoni', quantity: 2, itemPrice: 14.99, imageUrl: '/placeholder.svg' }],
    totalAmount: 29.98, paymentStatus: 'paid', orderStatus: 'delivered',
    createdAt: '2024-12-10T12:00:00Z',
    deliveryAddress: addresses[0],
    paymentMethod: 'UPI',
  },
  {
    id: 'ORD-002', userId: '1', addressId: '1',
    items: [
      { id: '2', menuItemId: '17', name: 'Brownie', quantity: 1, itemPrice: 6.99, imageUrl: '/placeholder.svg' },
      { id: '3', menuItemId: '14', name: 'Cold Coffee', quantity: 2, itemPrice: 4.99, imageUrl: '/placeholder.svg' },
    ],
    totalAmount: 16.97, paymentStatus: 'paid', orderStatus: 'out_for_delivery',
    createdAt: '2024-12-18T14:30:00Z',
    deliveryAddress: addresses[0],
    paymentMethod: 'Card',
  },
  {
    id: 'ORD-003', userId: '1', addressId: '2',
    items: [{ id: '4', menuItemId: '10', name: 'Cheese Burger', quantity: 1, itemPrice: 11.99, imageUrl: '/placeholder.svg' }],
    totalAmount: 11.99, paymentStatus: 'paid', orderStatus: 'preparing',
    createdAt: '2024-12-19T10:15:00Z',
    deliveryAddress: addresses[1],
    paymentMethod: 'COD',
  },
]

export function getMenuItemsByCategory(categorySlug?: string): MenuItem[] {
  if (!categorySlug || categorySlug === 'all') return menuItems
  const category = categories.find(c => c.slug === categorySlug)
  if (!category) return menuItems
  return menuItems.filter(item => item.categoryId === category.id)
}

export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find(item => item.id === id)
}

export function getReviewsByMenuItemId(menuItemId: string): Review[] {
  return reviews.filter(r => r.menuItemId === menuItemId)
}

export function getOrderById(id: string): Order | undefined {
  return orders.find(o => o.id === id)
}

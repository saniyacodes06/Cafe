import { relations } from 'drizzle-orm';
import { pgTable, serial, text, integer, decimal, boolean, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['customer', 'admin']);
export const paymentStatusEnum = pgEnum('payment_status', ['pending', 'paid', 'failed', 'refunded']);
export const orderStatusEnum = pgEnum('order_status', ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: text('clerk_id').unique(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone'),
  passwordHash: text('password_hash').notNull(),
  role: roleEnum('role').default('customer').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const addresses = pgTable('addresses', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: text('title'),
  fullAddress: text('full_address').notNull(),
  city: text('city').notNull(),
  state: text('state').notNull(),
  pincode: text('pincode').notNull(),
  landmark: text('landmark'),
  isDefault: boolean('is_default').default(false).notNull(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  imageUrl: text('image_url'),
});

export const menuItems = pgTable('menu_items', {
  id: serial('id').primaryKey(),
  categoryId: integer('category_id').notNull().references(() => categories.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  imageUrl: text('image_url'),
  isAvailable: boolean('is_available').default(true).notNull(),
});

export const cart = pgTable('cart', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }).unique(),
});

export const cartItems = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  cartId: integer('cart_id').notNull().references(() => cart.id, { onDelete: 'cascade' }),
  menuItemId: integer('menu_item_id').notNull().references(() => menuItems.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull().default(1),
});

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  addressId: integer('address_id').references(() => addresses.id, { onDelete: 'set null' }),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
  paymentMethod: text('payment_method').default('cod').notNull(),
  paymentStatus: paymentStatusEnum('payment_status').default('pending').notNull(),
  orderStatus: orderStatusEnum('order_status').default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').notNull().references(() => orders.id, { onDelete: 'cascade' }),
  menuItemId: integer('menu_item_id').notNull().references(() => menuItems.id, { onDelete: 'cascade' }),
  quantity: integer('quantity').notNull(),
  itemPrice: decimal('item_price', { precision: 10, scale: 2 }).notNull(),
});

export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').notNull().references(() => orders.id, { onDelete: 'cascade' }),
  razorpayPaymentId: text('razorpay_payment_id'),
  stripeSessionId: text('stripe_session_id'),
  stripePaymentIntentId: text('stripe_payment_intent_id'),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  status: text('status').notNull(),
  paidAt: timestamp('paid_at'),
});

export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  menuItemId: integer('menu_item_id').notNull().references(() => menuItems.id, { onDelete: 'cascade' }),
  rating: integer('rating').notNull(),
  comment: text('comment'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  addresses: many(addresses),
  orders: many(orders),
  reviews: many(reviews),
  cart: many(cart),
}));

export const addressesRelations = relations(addresses, ({ one }) => ({
  user: one(users, { fields: [addresses.userId], references: [users.id] }),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  menuItems: many(menuItems),
}));

export const menuItemsRelations = relations(menuItems, ({ one, many }) => ({
  category: one(categories, { fields: [menuItems.categoryId], references: [categories.id] }),
  reviews: many(reviews),
  cartItems: many(cartItems),
  orderItems: many(orderItems),
}));

export const cartRelations = relations(cart, ({ one, many }) => ({
  user: one(users, { fields: [cart.userId], references: [users.id] }),
  cartItems: many(cartItems),
}));

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  cart: one(cart, { fields: [cartItems.cartId], references: [cart.id] }),
  menuItem: one(menuItems, { fields: [cartItems.menuItemId], references: [menuItems.id] }),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, { fields: [orders.userId], references: [users.id] }),
  address: one(addresses, { fields: [orders.addressId], references: [addresses.id] }),
  orderItems: many(orderItems),
  payments: many(payments),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, { fields: [orderItems.orderId], references: [orders.id] }),
  menuItem: one(menuItems, { fields: [orderItems.menuItemId], references: [menuItems.id] }),
}));

export const paymentsRelations = relations(payments, ({ one }) => ({
  order: one(orders, { fields: [payments.orderId], references: [orders.id] }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, { fields: [reviews.userId], references: [users.id] }),
  menuItem: one(menuItems, { fields: [reviews.menuItemId], references: [menuItems.id] }),
}));

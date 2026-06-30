import dotenv from 'dotenv';
dotenv.config({ path: '../.env.local' });

import { db, schema } from '../lib/db';

const categoriesData = [
  { name: 'Pizza', slug: 'pizza', imageUrl: '/placeholder.svg' },
  { name: 'Pasta', slug: 'pasta', imageUrl: '/placeholder.svg' },
  { name: 'Burger', slug: 'burger', imageUrl: '/placeholder.svg' },
  { name: 'Fries', slug: 'fries', imageUrl: '/placeholder.svg' },
  { name: 'Beverages', slug: 'beverages', imageUrl: '/placeholder.svg' },
  { name: 'Desserts', slug: 'desserts', imageUrl: '/placeholder.svg' },
];

const tablesData = [
  { tableNumber: 1, type: 'single', capacity: 1 },
  { tableNumber: 2, type: 'single', capacity: 1 },
  { tableNumber: 3, type: 'single', capacity: 1 },
  { tableNumber: 4, type: 'couple', capacity: 2 },
  { tableNumber: 5, type: 'couple', capacity: 2 },
  { tableNumber: 6, type: 'couple', capacity: 2 },
  { tableNumber: 7, type: 'couple', capacity: 2 },
  { tableNumber: 8, type: 'couple', capacity: 2 },
  { tableNumber: 9, type: 'family', capacity: 4 },
  { tableNumber: 10, type: 'family', capacity: 4 },
  { tableNumber: 11, type: 'family', capacity: 4 },
  { tableNumber: 12, type: 'family', capacity: 4 },
  { tableNumber: 13, type: 'family', capacity: 6 },
  { tableNumber: 14, type: 'family', capacity: 6 },
  { tableNumber: 15, type: 'family', capacity: 6 },
  { tableNumber: 16, type: 'family', capacity: 8 },
  { tableNumber: 17, type: 'family', capacity: 8 },
];

const menuItemsData = [
  { categorySlug: 'pizza', name: 'Margherita', description: 'Classic tomato sauce, fresh mozzarella, and basil on a perfectly baked crust.', price: '249', imageUrl: '/pizza/margarita.jpg', isAvailable: true },
  { categorySlug: 'pizza', name: 'Farmhouse', description: 'Loaded with bell peppers, mushrooms, onions, olives, and sweet corn.', price: '349', imageUrl: '/pizza/farmhouse.jpg', isAvailable: true },
  { categorySlug: 'pizza', name: 'Pepperoni', description: 'Loaded with generous portions of spicy pepperoni and melted mozzarella.', price: '319', imageUrl: '/pizza/pepperoni.jpg', isAvailable: true },
  { categorySlug: 'pizza', name: 'Veg Supreme', description: 'An extravagant medley of seasonal vegetables on a bed of rich tomato sauce.', price: '379', imageUrl: '/pizza/supreme.jpg', isAvailable: true },
  { categorySlug: 'pasta', name: 'White Sauce Pasta', description: 'Creamy Alfredo sauce with garlic, parmesan, and penne tossed to perfection.', price: '249', imageUrl: '/pasta/whitesaucepasta.jpg', isAvailable: true },
  { categorySlug: 'pasta', name: 'Red Sauce Pasta', description: 'Tangy arrabiata sauce with cherry tomatoes, basil, and al dente spaghetti.', price: '219', imageUrl: '/pasta/redsaucepasta.jpg', isAvailable: true },
  { categorySlug: 'pasta', name: 'Alfredo Pasta', description: 'Rich and creamy Alfredo with mushrooms, broccoli, and grilled chicken.', price: '299', imageUrl: '/pasta/alfredo.jpg', isAvailable: true },
  { categorySlug: 'burger', name: 'Veg Burger', description: 'Crispy vegetable patty with fresh lettuce, tomato, and our signature sauce.', price: '179', imageUrl: '/burger/vegburger.jpg', isAvailable: true },
  { categorySlug: 'burger', name: 'Chicken Burger', description: 'Juicy grilled chicken breast with bacon, cheddar, and smoky barbecue sauce.', price: '219', imageUrl: '/burger/chickenburger.jpg', isAvailable: true },
  { categorySlug: 'burger', name: 'Cheese Burger', description: 'Double cheese, caramelized onions, and a perfectly seared beef patty.', price: '249', imageUrl: '/burger/cheeseburger.jpg', isAvailable: true },
  { categorySlug: 'fries', name: 'Peri Peri Fries', description: 'Crispy golden fries tossed in our signature peri peri seasoning.', price: '129', imageUrl: '/fries/periperifries.jpg', isAvailable: true },
  { categorySlug: 'fries', name: 'Cheese Fries', description: 'Loaded with melted cheddar, mozzarella, and a drizzle of ranch.', price: '169', imageUrl: '/fries/cheesefries.jpg', isAvailable: true },
  { categorySlug: 'fries', name: 'Loaded Fries', description: 'Topped with pulled chicken, jalapeños, sour cream, and guacamole.', price: '199', imageUrl: '/fries/loadedfries.jpg', isAvailable: true },
  { categorySlug: 'beverages', name: 'Cold Coffee', description: 'Chilled brewed coffee blended with milk, ice, and a hint of vanilla.', price: '99', imageUrl: '/beverages/coldcoffee.jpg', isAvailable: true },
  { categorySlug: 'beverages', name: 'Mojito', description: 'Refreshing mint and lime mojito with a splash of soda water.', price: '129', imageUrl: '/beverages/mojito.jpg', isAvailable: true },
  { categorySlug: 'beverages', name: 'Soft Drinks', description: 'Choice of Coca-Cola, Sprite, or Fanta served chilled with ice.', price: '59', imageUrl: '/beverages/softdrink.jpg', isAvailable: true },
  { categorySlug: 'desserts', name: 'Brownie', description: 'Warm, fudgy chocolate brownie served with a scoop of vanilla ice cream.', price: '149', imageUrl: '/desserts/brownie.jpg', isAvailable: true },
  { categorySlug: 'desserts', name: 'Ice Cream', description: 'Creamy handmade ice cream available in chocolate, vanilla, and strawberry.', price: '99', imageUrl: '/desserts/icecream.jpg', isAvailable: true },
  { categorySlug: 'desserts', name: 'Cheesecake', description: 'New York style cheesecake with a buttery graham cracker crust.', price: '169', imageUrl: '/desserts/cheesecake.jpg', isAvailable: true },
];

async function seed() {
  console.log('Seeding database...');

  await db.insert(schema.categories).values(categoriesData).onConflictDoNothing();
  console.log('Categories inserted');

  await db.insert(schema.tables).values(tablesData).onConflictDoNothing();
  console.log('Tables inserted');

  const cats = await db.select().from(schema.categories);

  for (const item of menuItemsData) {
    const cat = cats.find((c) => c.slug === item.categorySlug);
    if (cat) {
      await db
        .insert(schema.menuItems)
        .values({
          categoryId: cat.id,
          name: item.name,
          description: item.description,
          price: item.price,
          imageUrl: item.imageUrl,
          isAvailable: item.isAvailable,
        })
        .onConflictDoNothing();
    }
  }

  console.log('Menu items inserted');
  console.log('Seed complete!');
}

seed().catch((e) => {
  console.error('Seed failed:', e);
  process.exit(1);
});

import { db, schema } from '@/lib/db';
import { requireAuth, ok, bad, notFound, serverError } from '@/lib/api-utils';
import { eq, and, sql } from 'drizzle-orm';

export async function GET() {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const [cart] = await db
      .select()
      .from(schema.cart)
      .where(eq(schema.cart.userId, user.userId))
      .limit(1);

    if (!cart) return ok({ items: [] });

    const items = await db
      .select({
        id: schema.cartItems.id,
        menuItemId: schema.cartItems.menuItemId,
        quantity: schema.cartItems.quantity,
        name: schema.menuItems.name,
        price: schema.menuItems.price,
        imageUrl: schema.menuItems.imageUrl,
      })
      .from(schema.cartItems)
      .where(eq(schema.cartItems.cartId, cart.id))
      .leftJoin(schema.menuItems, eq(schema.cartItems.menuItemId, schema.menuItems.id));

    const cartItems = items.map((i) => ({
      id: String(i.id),
      menuItemId: String(i.menuItemId),
      name: i.name || '',
      price: Number(i.price),
      quantity: i.quantity,
      imageUrl: i.imageUrl || '/placeholder.svg',
    }));

    return ok({ items: cartItems });
  } catch (error) {
    return serverError(error);
  }
}

export async function POST(request: Request) {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const { menuItemId } = await request.json();
    if (!menuItemId) return bad('menuItemId is required');

    const itemId = Number(menuItemId);
    const [menuItem] = await db
      .select()
      .from(schema.menuItems)
      .where(eq(schema.menuItems.id, itemId))
      .limit(1);

    if (!menuItem) return notFound('Menu item not found');

    let [cart] = await db
      .select()
      .from(schema.cart)
      .where(eq(schema.cart.userId, user.userId))
      .limit(1);

    if (!cart) {
      [cart] = await db
        .insert(schema.cart)
        .values({ userId: user.userId })
        .returning();
    }

    const [existing] = await db
      .select()
      .from(schema.cartItems)
      .where(
        and(
          eq(schema.cartItems.cartId, cart.id),
          eq(schema.cartItems.menuItemId, itemId)
        )
      )
      .limit(1);

    if (existing) {
      await db
        .update(schema.cartItems)
        .set({ quantity: existing.quantity + 1 })
        .where(eq(schema.cartItems.id, existing.id));
    } else {
      await db
        .insert(schema.cartItems)
        .values({ cartId: cart.id, menuItemId: itemId, quantity: 1 });
    }

    return ok({ message: 'Item added to cart' });
  } catch (error) {
    return serverError(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const { menuItemId, quantity } = await request.json();
    if (!menuItemId || quantity == null) return bad('menuItemId and quantity are required');

    const itemId = Number(menuItemId);

    const [cart] = await db
      .select()
      .from(schema.cart)
      .where(eq(schema.cart.userId, user.userId))
      .limit(1);

    if (!cart) return notFound('Cart not found');

    const [cartItem] = await db
      .select()
      .from(schema.cartItems)
      .where(
        and(
          eq(schema.cartItems.cartId, cart.id),
          eq(schema.cartItems.menuItemId, itemId)
        )
      )
      .limit(1);

    if (!cartItem) return notFound('Item not in cart');

    if (quantity <= 0) {
      await db
        .delete(schema.cartItems)
        .where(eq(schema.cartItems.id, cartItem.id));
    } else {
      await db
        .update(schema.cartItems)
        .set({ quantity })
        .where(eq(schema.cartItems.id, cartItem.id));
    }

    return ok({ message: 'Cart updated' });
  } catch (error) {
    return serverError(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const { menuItemId } = await request.json();
    if (!menuItemId) return bad('menuItemId is required');

    const [cart] = await db
      .select()
      .from(schema.cart)
      .where(eq(schema.cart.userId, user.userId))
      .limit(1);

    if (!cart) return ok({ message: 'Cart is empty' });

    await db
      .delete(schema.cartItems)
      .where(
        and(
          eq(schema.cartItems.cartId, cart.id),
          eq(schema.cartItems.menuItemId, Number(menuItemId))
        )
      );

    return ok({ message: 'Item removed from cart' });
  } catch (error) {
    return serverError(error);
  }
}

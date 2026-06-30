import { db, schema } from '@/lib/db';
import { requireUserId, ok, bad, notFound, serverError } from '@/lib/api-utils';
import { eq, and, inArray, desc } from 'drizzle-orm';

export async function GET() {
  try {
    const userId = await requireUserId();

    const ordersData = await db
      .select()
      .from(schema.orders)
      .where(eq(schema.orders.userId, userId))
      .orderBy(desc(schema.orders.createdAt));

    const result = await Promise.all(
      ordersData.map(async (order) => {
        const items = await db
          .select({
            id: schema.orderItems.id,
            menuItemId: schema.orderItems.menuItemId,
            quantity: schema.orderItems.quantity,
            itemPrice: schema.orderItems.itemPrice,
            name: schema.menuItems.name,
            imageUrl: schema.menuItems.imageUrl,
          })
          .from(schema.orderItems)
          .where(eq(schema.orderItems.orderId, order.id))
          .leftJoin(schema.menuItems, eq(schema.orderItems.menuItemId, schema.menuItems.id));

        let deliveryAddress = null;
        if (order.addressId) {
          const [addr] = await db
            .select()
            .from(schema.addresses)
            .where(eq(schema.addresses.id, order.addressId))
            .limit(1);
          if (addr) {
            deliveryAddress = {
              id: String(addr.id),
              userId: String(addr.userId),
              title: addr.title || '',
              fullAddress: addr.fullAddress,
              city: addr.city,
              state: addr.state,
              pincode: addr.pincode,
              landmark: addr.landmark || '',
              isDefault: addr.isDefault,
            };
          }
        }

        return {
          id: `ORD-${String(order.id).padStart(3, '0')}`,
          userId: String(order.userId),
          addressId: order.addressId ? String(order.addressId) : '',
          items: items.map((i) => ({
            id: String(i.id),
            menuItemId: String(i.menuItemId),
            name: i.name || '',
            quantity: i.quantity,
            itemPrice: Number(i.itemPrice),
            imageUrl: i.imageUrl || '/placeholder.svg',
          })),
          totalAmount: Number(order.totalAmount),
          paymentStatus: order.paymentStatus === 'paid' ? 'paid' as const : order.paymentStatus === 'failed' ? 'failed' as const : 'pending' as const,
          orderStatus: mapOrderStatus(order.orderStatus),
          createdAt: order.createdAt.toISOString(),
          deliveryAddress,
          paymentMethod: order.paymentMethod || '',
        };
      })
    );

    return ok(result);
  } catch (error) {
    return serverError(error);
  }
}

function mapOrderStatus(status: string): 'placed' | 'accepted' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled' {
  const map: Record<string, 'placed' | 'accepted' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'> = {
    pending: 'placed',
    confirmed: 'accepted',
    preparing: 'preparing',
    out_for_delivery: 'out_for_delivery',
    delivered: 'delivered',
    cancelled: 'cancelled',
  };
  return map[status] || 'placed';
}

export async function POST(request: Request) {
  try {
    const userId = await requireUserId();
    // Fallback for development when Clerk isn't loading
    let finalUserId = userId
    if (!finalUserId) {
      const body = await request.json()
      const clerkId = body.clerkId
      if (clerkId) {
        const [user] = await db
          .select()
          .from(schema.users)
          .where(eq(schema.users.clerkId, clerkId))
          .limit(1)
        if (user) finalUserId = user.id
      }
    }
    if (!finalUserId) return bad('Unauthorized - please sign in');
    // Re-parse body since we already read it
    const { addressId, paymentMethod, items: orderItemsData } = await request.json();

    if (!addressId || !orderItemsData || orderItemsData.length === 0) {
      return bad('Address and items are required');
    }

    let resolvedAddressId: number | null = null;
    if (!addressId.startsWith('mock-')) {
      const [address] = await db
        .select()
        .from(schema.addresses)
        .where(
          and(eq(schema.addresses.id, Number(addressId)), eq(schema.addresses.userId, userId))
        )
        .limit(1);
      if (!address) return bad('Invalid address');
      resolvedAddressId = address.id;
    }

    const menuItemIds = orderItemsData.map((i: { menuItemId: string }) => Number(i.menuItemId));
    const menuItems = await db
      .select()
      .from(schema.menuItems)
      .where(inArray(schema.menuItems.id, menuItemIds));

    const totalAmount = orderItemsData.reduce((sum: number, item: { menuItemId: string; quantity: number }) => {
      const menuItem = menuItems.find((m) => m.id === Number(item.menuItemId));
      return sum + (menuItem ? Number(menuItem.price) * item.quantity : 0);
    }, 0);

    const [order] = await db
      .insert(schema.orders)
      .values({
        userId,
        addressId: resolvedAddressId,
        totalAmount: String(totalAmount),
        paymentMethod: paymentMethod || 'cod',
        paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
        orderStatus: 'pending',
      })
      .returning();

    for (const item of orderItemsData) {
      const menuItem = menuItems.find((m) => m.id === Number(item.menuItemId));
      if (menuItem) {
        await db.insert(schema.orderItems).values({
          orderId: order.id,
          menuItemId: Number(item.menuItemId),
          quantity: item.quantity,
          itemPrice: String(menuItem.price),
        });
      }
    }

    const [cart] = await db
      .select()
      .from(schema.cart)
      .where(eq(schema.cart.userId, userId))
      .limit(1);

    if (cart) {
      await db
        .delete(schema.cartItems)
        .where(eq(schema.cartItems.cartId, cart.id));
      await db
        .delete(schema.cart)
        .where(eq(schema.cart.id, cart.id));
    }

    return ok({
      id: `ORD-${String(order.id).padStart(3, '0')}`,
      createdAt: order.createdAt.toISOString(),
    });
  } catch (error) {
    return serverError(error);
  }
}

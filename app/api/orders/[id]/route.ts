import { db, schema } from '@/lib/db';
import { requireAuth, ok, notFound, serverError } from '@/lib/api-utils';
import { eq, and } from 'drizzle-orm';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { user, error } = await requireAuth();
    if (error) return error;

    const { id } = await params;
    const orderNum = Number(id.replace('ORD-', ''));
    if (isNaN(orderNum)) return notFound('Invalid order ID');

    const [order] = await db
      .select()
      .from(schema.orders)
      .where(
        and(eq(schema.orders.id, orderNum), eq(schema.orders.userId, user.userId))
      )
      .limit(1);

    if (!order) return notFound('Order not found');

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

    const paymentStatus = order.paymentStatus === 'paid' ? 'paid' as const : order.paymentStatus === 'failed' ? 'failed' as const : 'pending' as const;
    const orderStatusMap: Record<string, 'placed' | 'accepted' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'> = {
      pending: 'placed',
      confirmed: 'accepted',
      preparing: 'preparing',
      out_for_delivery: 'out_for_delivery',
      delivered: 'delivered',
      cancelled: 'cancelled',
    };

    return ok({
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
      paymentStatus,
      orderStatus: orderStatusMap[order.orderStatus] || 'placed',
      createdAt: order.createdAt.toISOString(),
      deliveryAddress,
      paymentMethod: '',
    });
  } catch (error) {
    return serverError(error);
  }
}

const BASE = '';

export async function api<T = unknown>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Something went wrong');
  return data;
}

export const auth = {
  signup: (body: { name: string; email: string; phone?: string; password: string }) =>
    api<{ user: import('@/types').User }>('/api/auth/signup', { method: 'POST', body: JSON.stringify(body) }),
  login: (body: { email: string; password: string }) =>
    api<{ user: import('@/types').User }>('/api/auth/login', { method: 'POST', body: JSON.stringify(body) }),
  logout: () => api('/api/auth/logout', { method: 'POST' }),
  me: () => api<import('@/types').User>('/api/auth/me'),
};

export const categories = {
  list: () => api<import('@/types').Category[]>('/api/categories'),
};

export const menu = {
  list: (category?: string) =>
    api<import('@/types').MenuItem[]>(`/api/menu${category ? `?category=${category}` : ''}`),
  get: (id: string) =>
    api<{ item: import('@/types').MenuItem; reviews: import('@/types').Review[] }>(`/api/menu/${id}`),
};

export const cart = {
  get: () => api<{ items: import('@/types').CartItem[] }>('/api/cart'),
  add: (menuItemId: string) =>
    api('/api/cart', { method: 'POST', body: JSON.stringify({ menuItemId }) }),
  update: (menuItemId: string, quantity: number) =>
    api('/api/cart', { method: 'PATCH', body: JSON.stringify({ menuItemId, quantity }) }),
  remove: (menuItemId: string) =>
    api('/api/cart', { method: 'DELETE', body: JSON.stringify({ menuItemId }) }),
};

export const address = {
  list: () => api<import('@/types').Address[]>('/api/address'),
  create: (body: Partial<import('@/types').Address>) =>
    api<import('@/types').Address>('/api/address', { method: 'POST', body: JSON.stringify(body) }),
  update: (id: string, body: Partial<import('@/types').Address>) =>
    api<import('@/types').Address>(`/api/address/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: (id: string) => api(`/api/address/${id}`, { method: 'DELETE' }),
};

export const orders = {
  list: () => api<import('@/types').Order[]>('/api/orders'),
  get: (id: string) => api<import('@/types').Order>(`/api/orders/${id}`),
  create: (body: { addressId: string; paymentMethod: string; items: { menuItemId: string; quantity: number }[] }) =>
    api<{ id: string; createdAt: string }>('/api/orders', { method: 'POST', body: JSON.stringify(body) }),
};

export const reviews = {
  list: (menuItemId?: string) =>
    api<import('@/types').Review[]>(`/api/reviews${menuItemId ? `?menuItemId=${menuItemId}` : ''}`),
  create: (body: { menuItemId: string; rating: number; comment?: string }) =>
    api<import('@/types').Review>('/api/reviews', { method: 'POST', body: JSON.stringify(body) }),
};

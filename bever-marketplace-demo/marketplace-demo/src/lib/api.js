async function request(path, options) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || `Request failed (${res.status})`);
  return body;
}

export const api = {
  products: (params = {}) => {
    const qs = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== '' && v != null && v !== false));
    return request(`/products?${qs}`);
  },
  product: (id) => request(`/products/${id}`),
  categories: () => request('/categories'),
  countries: () => request('/countries'),
  createOrder: (payload) => request('/orders', { method: 'POST', body: JSON.stringify(payload) }),
  order: (ref) => request(`/orders/${ref}`),
};

export const formatUSD = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

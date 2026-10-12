import { getProduct } from './catalog.js';

// In-memory store. Orders are lost when the server restarts (demo only).
const orders = [];

/**
 * Validate the order lines and return an error message, or null if valid.
 * @param {{ productId: string, quantity: number }[]} lines
 */
export function validateOrderLines(lines) {
  if (!Array.isArray(lines) || lines.length === 0) return 'Order has no items.';
  for (const line of lines) {
    const product = getProduct(line.productId);
    if (!product) return `Unknown product: ${line.productId}`;
    if (!Number.isInteger(line.quantity) || line.quantity <= 0) {
      return `Invalid quantity for ${product.name}.`;
    }
  }
  return null;
}

export function createOrder({ lines, buyer, tradeTerms }) {
  const error = validateOrderLines(lines);
  if (error) return { error };

  const items = lines.map((l) => {
    const p = getProduct(l.productId);
    return { productId: p.id, name: p.name, unit: p.unit, price: p.price, quantity: l.quantity, lineTotal: +(p.price * l.quantity).toFixed(2) };
  });
  const order = {
    reference: `BVR-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    buyer,
    tradeTerms: tradeTerms ?? 'FOB',
    items,
    total: +items.reduce((sum, i) => sum + i.lineTotal, 0).toFixed(2),
    status: 'demo-submitted',
  };
  orders.push(order);
  return { order };
}

export function getOrder(reference) {
  return orders.find((o) => o.reference === reference) ?? null;
}

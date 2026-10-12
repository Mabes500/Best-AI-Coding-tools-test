// Pure cart logic. The CartContext wraps these functions with React state.
// A cart is an array of { productId, name, price, unit, minOrderQty, quantity }.

export function addItem(cart, product, quantity = 1) {
  const existing = cart.find((i) => i.productId === product.id);
  if (existing) {
    return cart.map((i) => (i.productId === product.id ? { ...i, quantity: i.quantity + quantity } : i));
  }
  return [
    ...cart,
    {
      productId: product.id,
      name: product.name,
      price: product.price,
      unit: product.unit,
      minOrderQty: product.minOrderQty,
      quantity,
    },
  ];
}

export function updateQuantity(cart, productId, quantity) {
  const qty = Math.max(1, Math.floor(Number(quantity) || 0));
  return cart.map((i) => (i.productId === productId ? { ...i, quantity: qty } : i));
}

export function removeItem(cart, productId) {
  return cart.filter((i) => i.productId !== productId);
}

export function lineTotal(item) {
  return +(item.price * item.quantity).toFixed(2);
}

export function cartTotal(cart) {
  return +cart.reduce((sum, i) => sum + lineTotal(i), 0).toFixed(2);
}

export function itemCount(cart) {
  return cart.length;
}

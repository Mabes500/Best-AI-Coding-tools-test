import { createContext, useContext, useEffect, useState } from 'react';
import * as cartLib from './lib/cart.js';

const CartContext = createContext(null);
const STORAGE_KEY = 'bever-demo-cart';

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      /* storage unavailable: cart lives in memory only */
    }
  }, [cart]);

  const value = {
    cart,
    add: (product, qty) => setCart((c) => cartLib.addItem(c, product, qty)),
    update: (id, qty) => setCart((c) => cartLib.updateQuantity(c, id, qty)),
    remove: (id) => setCart((c) => cartLib.removeItem(c, id)),
    clear: () => setCart([]),
    total: cartLib.cartTotal(cart),
    count: cartLib.itemCount(cart),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);

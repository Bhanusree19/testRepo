import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, products } from "../data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "nova-cart-v1";

const starterCart = [{ id: "arc-lounge-chair", quantity: 1 }];

function readCart() {
  if (typeof window === "undefined") return starterCart;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return starterCart;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return starterCart;
    return parsed.filter((item) => getProduct(item.id) && item.quantity > 0);
  } catch {
    return starterCart;
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage can be unavailable in private modes */
    }
  }, [items]);

  const addItem = useCallback((id, quantity = 1) => {
    if (!getProduct(id)) return;
    setItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, quantity: Math.min(item.quantity + quantity, 9) } : item,
        );
      }
      return [...current, { id, quantity }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const setQuantity = useCallback((id, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((item) => item.id !== id);
      return current.map((item) =>
        item.id === id ? { ...item, quantity: Math.min(quantity, 9) } : item,
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const detailedItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProduct(item.id);
          return product ? { ...item, product, lineTotal: product.price * item.quantity } : null;
        })
        .filter(Boolean),
    [items],
  );

  const subtotal = detailedItems.reduce((total, item) => total + item.lineTotal, 0);
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 500 ? 0 : 35;

  const value = useMemo(
    () => ({
      items,
      detailedItems,
      subtotal,
      shipping,
      total: subtotal + shipping,
      count,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      recommended: products.filter((product) => !items.some((item) => item.id === product.id)).slice(0, 3),
    }),
    [items, detailedItems, subtotal, shipping, count, addItem, removeItem, setQuantity, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

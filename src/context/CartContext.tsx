"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { watches, type Watch } from "@/data/watches";

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
  detailedItems: Array<CartItem & { watch: Watch }>;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "azeir-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        setItems([]);
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, ready]);

  const value = useMemo(() => {
    const detailedItems = items
      .map((item) => {
        const watch = watches.find((entry) => entry.slug === item.slug);
        return watch ? { ...item, watch } : null;
      })
      .filter((item): item is CartItem & { watch: Watch } => item !== null);

    return {
      items,
      addItem: (slug: string) => {
        setItems((current) => {
          const existing = current.find((item) => item.slug === slug);
          if (existing) {
            return current.map((item) =>
              item.slug === slug
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }
          return [...current, { slug, quantity: 1 }];
        });
      },
      removeItem: (slug: string) => {
        setItems((current) => current.filter((item) => item.slug !== slug));
      },
      updateQuantity: (slug: string, quantity: number) => {
        setItems((current) =>
          quantity < 1
            ? current.filter((item) => item.slug !== slug)
            : current.map((item) =>
                item.slug === slug ? { ...item, quantity } : item,
              ),
        );
      },
      clear: () => setItems([]),
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: detailedItems.reduce(
        (sum, item) => sum + item.watch.price * item.quantity,
        0,
      ),
      detailedItems,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

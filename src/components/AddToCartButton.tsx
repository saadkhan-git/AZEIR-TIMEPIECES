"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addItem(slug);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
      className="btn-gold mt-8 w-full py-4"
    >
      {added ? "Added to atelier cart" : "Reserve this timepiece"}
    </button>
  );
}

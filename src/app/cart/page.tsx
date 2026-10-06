"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/watches";

export default function CartPage() {
  const { detailedItems, subtotal, updateQuantity, removeItem, clear } =
    useCart();

  if (detailedItems.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h1 className="font-serif text-5xl text-ivory">Your atelier cart</h1>
        <p className="mt-4 text-sm text-gold-light/80">
          No timepieces have been reserved yet.
        </p>
        <Link href="/collection" className="btn-ghost mt-10">
          Browse the collection
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-serif text-5xl text-ivory">Atelier cart</h1>
      <ul className="mt-12 divide-y divide-gold/15 border-y border-gold/15">
        {detailedItems.map((item) => (
          <li key={item.slug} className="flex gap-6 py-8">
            <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-stone">
              <Image
                src={item.watch.image}
                alt={item.watch.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link
                    href={`/watches/${item.slug}`}
                    className="font-serif text-2xl text-ivory transition-colors duration-500 ease-out hover:text-gold"
                  >
                    {item.watch.name}
                  </Link>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gold">
                    {item.watch.collection}
                  </p>
                </div>
                <p className="text-gold-light">
                  {formatPrice(item.watch.price * item.quantity)}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-gold-light">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.slug, item.quantity - 1)
                    }
                    className="h-8 w-8 border border-gold/40 transition-all duration-500 ease-out hover:border-gold hover:bg-gold/10 hover:text-ivory"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.slug, item.quantity + 1)
                    }
                    className="h-8 w-8 border border-gold/40 transition-all duration-500 ease-out hover:border-gold hover:bg-gold/10 hover:text-ivory"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.slug)}
                  className="text-xs uppercase tracking-[0.2em] text-gold/70 transition-colors duration-500 ease-out hover:text-ivory"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col items-end gap-4">
        <p className="text-lg text-ivory">
          Subtotal{" "}
          <span className="ml-4 text-gold-light">{formatPrice(subtotal)}</span>
        </p>
        <p className="max-w-sm text-right text-xs leading-6 text-gold-light/60">
          This is a reservation request. Our concierge will confirm availability
          and payment privately.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={clear}
            className="btn-ghost px-6"
          >
            Clear
          </button>
          <button
            type="button"
            className="btn-gold"
          >
            Request allocation
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const nav = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "Maison" },
  { href: "/cart", label: "Atelier Cart" },
];

export default function Header() {
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-2xl tracking-brand text-ivory"
        >
          AZEIR
        </Link>
        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.28em] text-gold-light md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-500 ease-out hover:text-ivory"
            >
              {item.label}
              {item.href === "/cart" && itemCount > 0 ? ` (${itemCount})` : ""}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="text-xs uppercase tracking-[0.28em] text-gold-light transition-colors duration-500 ease-out hover:text-ivory md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-4 border-t border-gold/20 px-6 py-5 text-xs uppercase tracking-[0.28em] text-gold-light md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="transition-colors duration-500 ease-out hover:text-ivory"
            >
              {item.label}
              {item.href === "/cart" && itemCount > 0 ? ` (${itemCount})` : ""}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

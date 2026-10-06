import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl tracking-brand text-ivory">AZEIR</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-gold-light/80">
            Independent haute horlogerie. Each timepiece is assembled by hand
            in limited numbers.
          </p>
        </div>
        <div className="text-sm text-gold-light">
          <p className="mb-3 uppercase tracking-[0.24em]">Maison</p>
          <div className="flex flex-col gap-2">
            <Link
              href="/collection"
              className="transition-colors duration-500 ease-out hover:text-ivory"
            >
              Collection
            </Link>
            <Link
              href="/about"
              className="transition-colors duration-500 ease-out hover:text-ivory"
            >
              The Atelier
            </Link>
            <Link
              href="/cart"
              className="transition-colors duration-500 ease-out hover:text-ivory"
            >
              Cart
            </Link>
          </div>
        </div>
        <div className="text-sm text-gold-light/80">
          <p className="mb-3 uppercase tracking-[0.24em] text-gold-light">
            Private clientele
          </p>
          <p>By appointment in Geneva, Paris, and New York.</p>
          <p className="mt-2">concierge@azeir.com</p>
        </div>
      </div>
      <p className="border-t border-gold/10 py-6 text-center text-xs tracking-[0.2em] text-gold-light/50">
        © {new Date().getFullYear()} AZEIR · All rights reserved
      </p>
    </footer>
  );
}

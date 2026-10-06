"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1600&q=80";

export default function HeroWatch() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12),_transparent_55%)]" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.42em] text-gold">
            Geneva · Est. 2018
          </p>
          <h1 className="mt-6 max-w-xl font-serif text-5xl leading-tight text-ivory md:text-7xl">
            Time, composed as an heirloom.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-7 text-ivory/70">
            Limited wristwatches, finished by hand. AZEIR is an independent
            maison for collectors who prefer silence over spectacle.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/collection" className="btn-gold">
              View collection
            </Link>
            <Link href="/about" className="btn-ghost">
              The maison
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" />
          <Image
            src={HERO_IMAGE}
            alt="AZEIR Nocturne 42 luxury watch"
            fill
            priority
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="relative z-10 rounded-sm object-cover shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

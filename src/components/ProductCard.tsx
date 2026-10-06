import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Watch } from "@/data/watches";

export default function ProductCard({ watch }: { watch: Watch }) {
  return (
    <Link href={`/watches/${watch.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Image
          src={watch.image}
          alt={watch.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {watch.limited ? (
          <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-gold-light">
            Limited
          </span>
        ) : null}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-gold">
            {watch.collection}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-ivory">{watch.name}</h3>
        </div>
        <p className="text-sm text-gold-light">{formatPrice(watch.price)}</p>
      </div>
    </Link>
  );
}

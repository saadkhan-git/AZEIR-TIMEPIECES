import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { formatPrice, getWatch, watches } from "@/data/watches";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return watches.map((watch) => ({ slug: watch.slug }));
}

export function generateMetadata({ params }: Props) {
  const watch = getWatch(params.slug);
  return {
    title: watch?.name ?? "Timepiece",
  };
}

export default function WatchPage({ params }: Props) {
  const watch = getWatch(params.slug);
  if (!watch) {
    notFound();
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Image
          src={watch.image}
          alt={watch.name}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col justify-center">
        <Link
          href="/collection"
          className="text-xs uppercase tracking-[0.28em] text-gold transition-colors duration-500 ease-out hover:text-ivory"
        >
          ← Collection
        </Link>
        <p className="mt-6 text-xs uppercase tracking-[0.32em] text-gold-light">
          {watch.collection}
          {watch.limited ? " · Limited edition" : ""}
        </p>
        <h1 className="mt-3 font-serif text-5xl text-ivory">{watch.name}</h1>
        <p className="mt-4 text-xl text-gold-light">{formatPrice(watch.price)}</p>
        <p className="mt-6 max-w-md text-sm leading-7 text-gold-light/85">
          {watch.description}
        </p>
        <dl className="mt-10 space-y-4 border-t border-gold/20 pt-8 text-sm">
          <div className="flex justify-between gap-6">
            <dt className="uppercase tracking-[0.2em] text-gold">Movement</dt>
            <dd className="text-right text-gold-light">{watch.movement}</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="uppercase tracking-[0.2em] text-gold">Case</dt>
            <dd className="text-right text-gold-light">{watch.case}</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="uppercase tracking-[0.2em] text-gold">Water</dt>
            <dd className="text-right text-gold-light">
              {watch.waterResistance}
            </dd>
          </div>
        </dl>
        <AddToCartButton slug={watch.slug} />
        <p className="mt-4 text-xs leading-6 text-gold-light/60">
          Reservations are confirmed by our concierge within two business days.
          Payment is collected upon allocation.
        </p>
      </div>
    </section>
  );
}

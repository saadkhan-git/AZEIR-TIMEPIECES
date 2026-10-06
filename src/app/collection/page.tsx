import ProductCard from "@/components/ProductCard";
import { watches } from "@/data/watches";

export const metadata = {
  title: "Collection",
};

export default function CollectionPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.32em] text-gold">
        Haute horlogerie
      </p>
      <h1 className="mt-3 font-serif text-5xl text-ivory">The collection</h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-gold-light/80">
        Six current references. Each watch is numbered, inspected, and
        delivered with a two-year maison warranty.
      </p>
      <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {watches.map((watch) => (
          <ProductCard key={watch.slug} watch={watch} />
        ))}
      </div>
    </section>
  );
}

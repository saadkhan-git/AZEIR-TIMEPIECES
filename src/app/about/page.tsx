export const metadata = {
  title: "The Maison",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.32em] text-gold">Maison</p>
      <h1 className="mt-3 font-serif text-5xl text-ivory">The AZEIR atelier</h1>
      <div className="mt-10 space-y-6 text-sm leading-8 text-gold-light/85">
        <p>
          AZEIR was founded as a quiet alternative to industrial luxury.
          We produce a small number of mechanical wristwatches each year,
          with cases, dials, and movements finished under one roof.
        </p>
        <p>
          Our collection is built around three ideas: celestial complications,
          travel time, and heritage dress watches. Nothing is made to trend.
          Every reference is intended to be worn for decades.
        </p>
        <p>
          Private appointments are available in Geneva, Paris, and New York.
          Write to the concierge to request a viewing of the current edition.
        </p>
      </div>
    </section>
  );
}

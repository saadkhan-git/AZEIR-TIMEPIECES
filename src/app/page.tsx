import HeroWatch from "@/components/HeroWatch";
import WatchCarousel from "@/components/WatchCarousel";
import { watches } from "@/data/watches";

export default function Home() {
  const carouselWatches = watches.slice(0, 4);

  return (
    <>
      <HeroWatch />
      <WatchCarousel watches={carouselWatches} />
      <section className="border-t border-gold/15 bg-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
          {[
            {
              title: "In-house finishing",
              copy: "Bevels, anglage, and Geneva stripes applied by a single watchmaker.",
            },
            {
              title: "Limited production",
              copy: "No more than two hundred pieces leave the atelier each year.",
            },
            {
              title: "Private concierge",
              copy: "Appointments, servicing, and engraving arranged in person.",
            },
          ].map((item) => (
            <article key={item.title}>
              <h3 className="font-serif text-2xl text-ivory">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory/65">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

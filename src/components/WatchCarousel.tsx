"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { formatPrice, type Watch } from "@/data/watches";

function wrapOffset(index: number, selected: number, length: number) {
  let diff = index - selected;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export default function WatchCarousel({ watches }: { watches: Watch[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="overflow-hidden bg-stone py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.32em] text-gold">
          Featured edition
        </p>
        <h2 className="mt-3 text-center font-serif text-4xl text-ivory md:text-5xl">
          Turn the carousel
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-ivory/60">
          Drag or swipe. Four current references, presented as they would sit
          in the atelier vitrine.
        </p>
      </div>

      <div className="mt-14 [perspective:1400px]">
        <div className="cursor-grab overflow-hidden active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y [transform-style:preserve-3d]">
            {watches.map((watch, index) => {
              const offset = wrapOffset(index, selected, watches.length);
              const isActive = index === selected;

              return (
                <div
                  key={watch.slug}
                  className="min-w-0 shrink-0 grow-0 basis-[78%] px-3 sm:basis-[52%] lg:basis-[34%]"
                >
                  <article
                    className="origin-center transition-all duration-500 ease-out"
                    style={{
                      transform: `translateZ(${isActive ? 48 : -90}px) rotateY(${offset * -18}deg) scale(${isActive ? 1 : 0.84})`,
                      opacity: Math.abs(offset) > 1 ? 0.4 : 1,
                    }}
                  >
                    <Link href={`/watches/${watch.slug}`} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                        <Image
                          src={watch.image}
                          alt={watch.name}
                          fill
                          sizes="(min-width: 1024px) 34vw, 80vw"
                          className="object-cover transition duration-700 ease-out group-hover:scale-105"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-[10px] uppercase tracking-[0.28em] text-gold">
                            {watch.collection}
                          </p>
                          <h3 className="mt-1 font-serif text-2xl text-ivory">
                            {watch.name}
                          </h3>
                          <p className="mt-1 text-sm text-gold">
                            {formatPrice(watch.price)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="btn-ghost px-6"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="btn-gold px-6"
        >
          Next
        </button>
      </div>
    </section>
  );
}

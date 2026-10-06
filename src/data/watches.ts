export type Watch = {
  slug: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  movement: string;
  case: string;
  waterResistance: string;
  limited: boolean;
  image: string;
};

export const watches: Watch[] = [
  {
    slug: "nocturne-42",
    name: "Nocturne 42",
    collection: "Celestial",
    price: 18500,
    description:
      "A midnight dial with a moon-phase complication, finished in 18k champagne gold. Designed for evening wear and the quiet hours after midnight.",
    movement: "In-house automatic, 72-hour power reserve",
    case: "42mm 18k champagne gold",
    waterResistance: "50m",
    limited: true,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "solstice-chronograph",
    name: "Solstice Chronograph",
    collection: "Atelier",
    price: 24200,
    description:
      "A column-wheel chronograph with a sunburst champagne dial. Built for collectors who measure time as ceremony, not convenience.",
    movement: "Column-wheel chronograph, 60-hour reserve",
    case: "41mm polished stainless steel",
    waterResistance: "100m",
    limited: false,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "aether-gmt",
    name: "Aether GMT",
    collection: "Voyage",
    price: 16800,
    description:
      "A dual-time traveler with a sapphire GMT hand and a black ceramic bezel. Quiet luxury for long-haul evenings.",
    movement: "Automatic GMT with independent hour jumper",
    case: "40mm black ceramic and titanium",
    waterResistance: "100m",
    limited: false,
    image:
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "maison-dor",
    name: "Maison d'Or",
    collection: "Heritage",
    price: 32000,
    description:
      "Our signature dress watch. Hand-guilloché dial, Breguet-style hands, and an alligator strap cut in our Geneva atelier.",
    movement: "Hand-wound, 80-hour power reserve",
    case: "39mm 18k yellow gold",
    waterResistance: "30m",
    limited: true,
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "eclipse-skeleton",
    name: "Eclipse Skeleton",
    collection: "Celestial",
    price: 28900,
    description:
      "An open-worked movement framed by a smoked sapphire dial. Every gear is finished as if it were meant to be seen.",
    movement: "Skeletonized automatic, 48-hour reserve",
    case: "43mm rose gold",
    waterResistance: "50m",
    limited: true,
    image:
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "celeste",
    name: "Céleste",
    collection: "Heritage",
    price: 21400,
    description:
      "A refined 36mm silhouette with a mother-of-pearl dial and diamond hour markers. Made for those who prefer presence over spectacle.",
    movement: "Automatic, 50-hour power reserve",
    case: "36mm white gold",
    waterResistance: "30m",
    limited: false,
    image:
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getWatch(slug: string) {
  return watches.find((watch) => watch.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

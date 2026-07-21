import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/products";

const CATEGORY_IMAGES: Record<string, string> = {
  montres: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800",
  bijoux: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
  sacs: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
  lunettes: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800",
};

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
      <div className="text-center mb-12">
        <span className="eyebrow text-or-fonce">Explorer</span>
        <h2 className="font-display text-3xl md:text-4xl mt-3">
          Nos catégories
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/catalogue?categorie=${c.slug}`}
            className="group relative aspect-[3/4] overflow-hidden bg-ivoire block"
          >
            <Image
              src={CATEGORY_IMAGES[c.slug]}
              alt={c.label}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-noir/25 group-hover:bg-noir/40 transition-colors" />
            <span className="absolute bottom-5 left-5 text-blanc font-display text-xl md:text-2xl">
              {c.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  const REVIEWS = [
  {
    name: "Rim A.",
    text: "Franchement un coup de cœur ! Je l'ai gardé sous la douche et à la plage, la couleur n'a absolument pas bougé. La finition dorée est magnifique.",
    role: "Casablanca",
    rating: 5,
  },
  {
    name: "Kawtar M.",
    text: "Le collier est encore plus élégant en vrai que sur les photos. Commande validée en deux minutes sur WhatsApp et reçue super rapidement. Top !",
    role: "Rabat",
    rating: 5,
  },
  {
    name: "Ghita B.",
    text: "Enfin des bijoux en acier inoxydable de vraie qualité au Maroc qui ne verdissent pas. Le packaging est soigné, on dirait un cadeau de grande marque.",
    role: "Marrakech",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-ivoire py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow text-or-fonce">Avis clients</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">
            Ils portent VELORIA
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-blanc p-8">
              <div className="flex gap-1 text-or mb-4" aria-hidden>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-gris leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <span className="eyebrow text-noir">{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { CategoryGrid, Testimonials } from "@/components/HomeSections";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.isFeatured);
  const nouveautes = PRODUCTS.filter((p) => p.isNew);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow text-or-fonce">Sélection</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3">
              Produits vedettes
            </h2>
          </div>
          <Link
            href="/catalogue"
            className="hidden md:block eyebrow text-sm hover:text-or transition-colors"
          >
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <CategoryGrid />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow text-or-fonce">Fraîchement arrivé</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3">
              Nouveautés
            </h2>
          </div>
          <Link
            href="/catalogue"
            className="hidden md:block eyebrow text-sm hover:text-or transition-colors"
          >
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {nouveautes.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 text-center">
        <span className="eyebrow text-or-fonce">Une question ?</span>
        <h2 className="font-display text-3xl md:text-4xl mt-3 max-w-lg mx-auto">
          Commandez en toute simplicité, directement via WhatsApp
        </h2>
        <p className="mt-4 text-gris max-w-md mx-auto text-sm">
          Ajoutez vos articles au panier, renseignez vos informations, et
          envoyez votre commande en un clic. Nous vous répondons rapidement.
        </p>
        <Link
          href="/catalogue"
          className="inline-block mt-8 bg-noir text-blanc px-8 py-3.5 text-sm eyebrow tracking-[0.15em] hover:bg-or transition-colors"
        >
          Commencer mes achats
        </Link>
      </section>
    </>
  );
}

"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, Product } from "@/lib/products";

type SortKey = "popularite" | "prix-asc" | "prix-desc";

function CatalogueContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categorieParam = searchParams.get("categorie") ?? "";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(categorieParam);
  const [sort, setSort] = useState<SortKey>("popularite");
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    let list: Product[] = PRODUCTS;

    if (category) {
      list = list.filter((p) => p.category === category);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    const sorted = [...list];
    if (sort === "prix-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "prix-desc") sorted.sort((a, b) => b.price - a.price);
    else sorted.sort((a, b) => b.popularity - a.popularity);

    return sorted;
  }, [category, query, sort]);

  function selectCategory(slug: string) {
    setCategory(slug);
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("categorie", slug);
    else params.delete("categorie");
    router.replace(`/catalogue?${params.toString()}`);
  }

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12">
      <div className="mb-10">
        <span className="eyebrow text-or-fonce">Boutique</span>
        <h1 className="font-display text-3xl md:text-5xl mt-3">
          Tous les produits
        </h1>
      </div>

      {/* Barre de recherche + tri */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gris-clair"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full border border-noir/15 pl-11 pr-4 py-3 text-sm bg-blanc focus:outline-none focus:border-or transition-colors"
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center justify-center gap-2 border border-noir/15 px-4 py-3 text-sm eyebrow"
        >
          <SlidersHorizontal size={16} /> Filtres
        </button>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="border border-noir/15 px-4 py-3 text-sm bg-blanc focus:outline-none focus:border-or transition-colors"
        >
          <option value="popularite">Trier : Popularité</option>
          <option value="prix-asc">Trier : Prix croissant</option>
          <option value="prix-desc">Trier : Prix décroissant</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10">
        {/* Filtres catégories */}
        <aside className={`${showFilters ? "block" : "hidden"} md:block`}>
          <div className="flex items-center justify-between mb-4 md:hidden">
            <span className="eyebrow">Filtrer</span>
            <button onClick={() => setShowFilters(false)} aria-label="Fermer">
              <X size={18} />
            </button>
          </div>
          <h3 className="eyebrow text-or-fonce mb-4 hidden md:block">
            Catégories
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button
                onClick={() => selectCategory("")}
                className={`hover:text-or transition-colors ${
                  category === "" ? "text-or font-medium" : ""
                }`}
              >
                Toutes les catégories
              </button>
            </li>
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <button
                  onClick={() => selectCategory(c.slug)}
                  className={`hover:text-or transition-colors ${
                    category === c.slug ? "text-or font-medium" : ""
                  }`}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Résultats */}
        <div>
          <p className="text-sm text-gris mb-6">
            {results.length} produit{results.length > 1 ? "s" : ""}
          </p>
          {results.length === 0 ? (
            <div className="text-center py-24 text-gris">
              Aucun produit ne correspond à votre recherche.
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CataloguePage() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Chargement...</div>}>
      <CatalogueContent />
    </Suspense>
  );
}

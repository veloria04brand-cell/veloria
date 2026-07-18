"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CATEGORIES } from "@/lib/products";
import { SHOP } from "@/lib/config";

export default function Header() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blanc/95 backdrop-blur border-b border-noir/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link
            href="/"
            className="font-display text-2xl md:text-3xl tracking-[0.15em] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            {SHOP.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm eyebrow tracking-[0.15em]">
            <Link href="/catalogue" className="hover:text-or transition-colors">
              Tout
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/catalogue?categorie=${c.slug}`}
                className="hover:text-or transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/catalogue"
              className="p-2 hover:text-or transition-colors"
              aria-label="Rechercher"
            >
              <Search size={20} />
            </Link>
            <Link
              href="/panier"
              className="relative p-2 hover:text-or transition-colors"
              aria-label="Panier"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-noir text-[10px] text-blanc">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-noir/10 px-5 py-4 flex flex-col gap-4 text-sm eyebrow tracking-[0.15em]">
          <Link href="/catalogue" onClick={() => setOpen(false)}>
            Tout
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/catalogue?categorie=${c.slug}`}
              onClick={() => setOpen(false)}
            >
              {c.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

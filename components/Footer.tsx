import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { SHOP } from "@/lib/config";
import { CATEGORIES } from "@/lib/products";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h3v6h3v-6h3l1-3h-4V9c0-.55.45-1 1-1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-noir text-blanc mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-display text-2xl tracking-[0.15em] mb-4">
            {SHOP.name}
          </h3>
          <p className="text-sm text-gris-clair leading-relaxed">
            {SHOP.tagline}
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href={SHOP.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-or transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={SHOP.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-or transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5 text-or-clair">Catégories</h4>
          <ul className="space-y-3 text-sm text-gris-clair">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/catalogue?categorie=${c.slug}`}
                  className="hover:text-blanc transition-colors"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5 text-or-clair">Boutique</h4>
          <ul className="space-y-3 text-sm text-gris-clair">
            <li>
              <Link href="/catalogue" className="hover:text-blanc transition-colors">
                Tous les produits
              </Link>
            </li>
            <li>
              <Link href="/panier" className="hover:text-blanc transition-colors">
                Mon panier
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5 text-or-clair">Contact</h4>
          <ul className="space-y-3 text-sm text-gris-clair">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{SHOP.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <a href={`mailto:${SHOP.email}`} className="hover:text-blanc transition-colors">
                {SHOP.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blanc/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 text-xs text-gris-clair flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {SHOP.name}. Tous droits réservés.</p>
          <p>Commandes traitées via WhatsApp — sans paiement en ligne.</p>
        </div>
      </div>
    </footer>
  );
}

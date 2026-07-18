export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "montres" | "bijoux" | "sacs" | "lunettes";
  price: number;
  oldPrice?: number;
  description: string;
  colors: { name: string; hex: string }[];
  stock: number;
  images: string[];
  popularity: number; // used for "trier par popularité"
  isNew?: boolean;
  isFeatured?: boolean;
};

export const CATEGORIES: { slug: Product["category"]; label: string }[] = [
  { slug: "montres", label: "Montres" },
  { slug: "bijoux", label: "Bijoux" },
  { slug: "sacs", label: "Sacs" },
  { slug: "lunettes", label: "Lunettes" },
];

// NOTE: image URLs are placeholders (Unsplash source) — remplacez-les par vos
// propres photos produit (voir /public/products et le panneau admin).
export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "montre-aurea",
    name: "Montre Aurea",
    category: "montres",
    price: 890,
    oldPrice: 1090,
    description:
      "Boîtier acier inoxydable brossé, bracelet cuir italien, mouvement quartz suisse. Une pièce intemporelle pensée pour durer.",
    colors: [
      { name: "Noir", hex: "#0b0b0a" },
      { name: "Cognac", hex: "#8a5a34" },
    ],
    stock: 12,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200",
      "https://images.unsplash.com/photo-1516633630673-67d6b3ffbaf3?q=80&w=1200",
    ],
    popularity: 98,
    isFeatured: true,
  },
  {
    id: "2",
    slug: "collier-linea",
    name: "Collier Linea",
    category: "bijoux",
    price: 320,
    description:
      "Chaîne plaquée or 18 carats, fermoir sécurisé, pendentif minimaliste gravé à la main.",
    colors: [
      { name: "Or", hex: "#b08d57" },
      { name: "Argent", hex: "#c7c7c7" },
    ],
    stock: 25,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200",
    ],
    popularity: 87,
    isFeatured: true,
    isNew: true,
  },
  {
    id: "3",
    slug: "sac-camille",
    name: "Sac Camille",
    category: "sacs",
    price: 650,
    description:
      "Sac à main structuré en cuir grainé, doublure satinée, bandoulière amovible. Fabrication artisanale.",
    colors: [
      { name: "Noir", hex: "#0b0b0a" },
      { name: "Ivoire", hex: "#f3f0e9" },
    ],
    stock: 8,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1200",
    ],
    popularity: 76,
    isFeatured: true,
  },
  {
    id: "4",
    slug: "lunettes-riviera",
    name: "Lunettes Riviera",
    category: "lunettes",
    price: 210,
    description:
      "Monture acétate premium, verres polarisés catégorie 3, protection UV400.",
    colors: [
      { name: "Écaille", hex: "#5a3d24" },
      { name: "Noir mat", hex: "#0b0b0a" },
    ],
    stock: 30,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1200",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200",
    ],
    popularity: 64,
    isNew: true,
  },
  {
    id: "5",
    slug: "montre-noir-mat",
    name: "Montre Noir Mat",
    category: "montres",
    price: 950,
    description:
      "Boîtier PVD noir, bracelet milanais, verre saphir anti-rayures. Édition limitée.",
    colors: [{ name: "Noir", hex: "#0b0b0a" }],
    stock: 5,
    images: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1200",
      "https://images.unsplash.com/photo-1495856458515-0637185db551?q=80&w=1200",
    ],
    popularity: 91,
    isNew: true,
  },
  {
    id: "6",
    slug: "bracelet-fil-or",
    name: "Bracelet Fil d'Or",
    category: "bijoux",
    price: 180,
    oldPrice: 220,
    description: "Bracelet fin plaqué or, réglable, à porter seul ou superposé.",
    colors: [{ name: "Or", hex: "#b08d57" }],
    stock: 40,
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200",
    ],
    popularity: 70,
  },
  {
    id: "7",
    slug: "sac-bandouliere-nova",
    name: "Sac Bandoulière Nova",
    category: "sacs",
    price: 420,
    description: "Format compact, cuir vegan premium, compartiment téléphone dédié.",
    colors: [
      { name: "Camel", hex: "#b5824a" },
      { name: "Noir", hex: "#0b0b0a" },
    ],
    stock: 18,
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200",
    ],
    popularity: 58,
  },
  {
    id: "8",
    slug: "lunettes-soleil-mvmt",
    name: "Lunettes Solaires Onyx",
    category: "lunettes",
    price: 195,
    description: "Design épuré, monture métal fine, verres dégradés fumés.",
    colors: [{ name: "Or / Fumé", hex: "#b08d57" }],
    stock: 22,
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1200",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200",
    ],
    popularity: 55,
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: "MAD",
    maximumFractionDigits: 0,
  }).format(value);
}

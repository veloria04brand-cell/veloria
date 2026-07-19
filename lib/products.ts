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
  { slug: "bijoux", label: "Bijoux" },
];

// NOTE: image URLs are placeholders (Unsplash source) — remplacez-les par vos
// propres photos produit (voir /public/products et le panneau admin).
export const PRODUCTS: Product[] = [
  
  {
    id: "1",
    slug: "ensemble-van-cleef",
    name: "Ensemble Van Cleef",
    category: "bijoux",
    price: 320,
    description:
      "Ensemble raffiné composé d'un collier, de boucles d'oreilles et d'une bague, finition plaqué or avec motifs floraux gravés.",
    colors: [
      { name: "Or", hex: "#b08d57" },

    ],
    stock: 1,
    images: [
      "https://i.ibb.co/2YvGcMK3/Chat-GPT-Image-Jul-19-2026-12-07-21-PM.jpg",
  
    ],
    popularity: 95,
    isFeatured: true,
    isNew: true,
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

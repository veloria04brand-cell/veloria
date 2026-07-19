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
    stock: 1,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200",
    ],
    popularity: 87,
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

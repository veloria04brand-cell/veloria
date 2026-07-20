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
    price: 100,
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


  {
    id: "2",
    slug: "bracelet-tulip",
    name: "bracelet tulip",
    category: "bijoux",
    price: 100,
    description:
      "Bracelet délicat motif fleurs en plaqué or, orné de cristaux bleus profonds, idéal pour une touche d'élégance.",
    colors: [
      { name: "Or", hex: "#b08d57" },
      { "name": "Blanc", "hex": "#ffffff" },
      

    ],
    stock: 2,
    images: [
      "https://i.ibb.co/Zz6yjzjt/Chat-GPT-Image-19-juil-2026-13-51-03.jpg",
      "https://i.ibb.co/SDTzr7fD/Chat-GPT-Image-19-juil-2026-13-52-25.jpg",
  
    ],
    popularity: 95,
    isFeatured: true,
    isNew: true,
  },


  {
    "id": "3",
    "slug": "bague-fleur-diamants",
    "name": "Bague Pétale Lux - Or",
    "category": "bijoux",
    "price": 190,
    "description": "Bague en acier inoxydable plaqué or, design floral serti de zircons, garantie anti-ternissement et résistante à l'eau.",
    "colors": [
      { "name": "Or", "hex": "#b08d57" }
    ],
    "stock": 1,
    "images": ["https://i.ibb.co/nsfNNsSz/Chat-GPT-Image-19-juil-2026-13-42-05.jpg"],
    "popularity": 94,
    "isFeatured": true,
    "isNew": true
  },
 {
    "id": "5",
    "slug": "bague-solitaire-rose",
    "name": "Bague Solitaire Royal - Or",
    "category": "bijoux",
    "price": 210,
    "description": "Bague solitaire en acier inoxydable de haute qualité plaqué or avec pierre rose, ne change https://github.com/veloria04brand-cell/veloria/blob/main/lib/products.tspas de couleur, garantie incluse.",
    "colors": [
      { "name": "Or", "hex": "#b08d57" }
    ],
    "stock": 1,
    "images": ["https://i.ibb.co/Wwz7RMW/Chat-GPT-Image-19-juil-2026-13-47-34.jpg"],
    "popularity": 96,
    "isFeatured": true,
    "isNew": true
  },


  
]
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

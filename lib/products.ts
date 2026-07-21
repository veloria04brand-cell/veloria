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
      { name: "Blanc", hex: "#ffffff" },
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
    id: "3",
    slug: "bague-fleur-diamants",
    name: "Bague Pétale Lux - Or",
    category: "bijoux",
    price: 190,
    description: "Bague en acier inoxydable plaqué or, design floral serti de zircons, garantie anti-ternissement et résistante à l'eau.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/nsfNNsSz/Chat-GPT-Image-19-juil-2026-13-42-05.jpg"],
    popularity: 94,
    isFeatured: true,
    isNew: true
  },
  {
    id: "4",
    slug: "bague-solitaire-rose",
    name: "Bague Solitaire Royal - Or",
    category: "bijoux",
    price: 210,
    description: "Bague solitaire en acier inoxydable de haute qualité plaqué or avec pierre rose, ne change pas de couleur, garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/Wwz7RMW/Chat-GPT-Image-19-juil-2026-13-47-34.jpg"],
    popularity: 96,
    isFeatured: true,
    isNew: true
  },
  {
    id: "5",
    slug: "boucles-oreilles-signature",
    name: "Boucles d'oreilles Signature",
    category: "bijoux",
    price: 150,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité (finition dorée). Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 3,
    images: [
      "https://i.ibb.co/7NkNbzKK/Gemini-Generated-Image-yryplgyryplgyryp.jpg",
      "https://i.ibb.co/4ZdmrdjR/Gemini-Generated-Image-fkyp64fkyp64fkyp.jpg",
      "https://i.ibb.co/c0JdMz1/Gemini-Generated-Image-v3jm3wv3jm3wv3jm.jpg"
    ],
    popularity: 90,
    isFeatured: true,
    isNew: true
  },

  {
    id: "5",
    slug: "boucles-oreilles-signature",
    name: "Boucles d'oreilles Signature",
    category: "bijoux",
    price: 150,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité (finition dorée). Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 3,
    images: [
      "https://i.ibb.co/7NkNbzKK/Gemini-Generated-Image-yryplgyryplgyryp.jpg",
      "https://i.ibb.co/4ZdmrdjR/Gemini-Generated-Image-fkyp64fkyp64fkyp.jpg",
      "https://i.ibb.co/c0JdMz1/Gemini-Generated-Image-v3jm3wv3jm3wv3jm.jpg"
    ],
    popularity: 90,
    isFeatured: true,
    isNew: true
  },

  {
    id: "6",
    slug: "boucles-oreilles-color-bleu",
    name: "Boucles d'oreilles Éclat - Bleu",
    category: "bijoux",
    price: 150,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité avec détail coloré. Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Bleu", hex: "#3b82f6" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/QFhW7vh9/Gemini-Generated-Image-5zxrx55zxrx55zxr.jpg"
    ],
    popularity: 91,
    isFeatured: true,
    isNew: true
  },
  {
    id: "7",
    slug: "boucles-oreilles-color-rose-bebe",
    name: "Boucles d'oreilles Éclat - Rose Bébé",
    category: "bijoux",
    price: 150,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité avec détail coloré. Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Rose Bébé", hex: "#fbcfe8" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/sd1wwKwB/Gemini-Generated-Image-p5ienep5ienep5ie.jpg"
    ],
    popularity: 92,
    isFeatured: true,
    isNew: true
  },
  {
    id: "8",
    slug: "boucles-oreilles-color-somo",
    name: "Boucles d'oreilles Éclat - Somo",
    category: "bijoux",
    price: 150,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité avec détail coloré. Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Somo", hex: "#ffa07a" }
    ],
    stock: 1,
    images: [
      " https://i.ibb.co/cc3TvYnS/Gemini-Generated-Image-2kcwfs2kcwfs2kcw.jpg   "
    ],
    popularity: 93,
    isFeatured: true,
    isNew: true
  }

  
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

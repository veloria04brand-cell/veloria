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
    name: "Ensemble Élégance",
    category: "bijoux",
    price: 100,
    description:
      "Ensemble raffiné composé d'un collier, de boucles d'oreilles et d'une bague, fabriqué en acier inoxydable avec une finition dorée.",
    colors: [
      { name: "Or", hex: "#b08d57" },
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/2YvGcMK3/Chat-GPT-Image-Jul-19-2026-12-07-21-PM.jpg",
    ],
    popularity: 95,
    isFeatured: true,
    isNew: false,
  },
  {
    id: "2",
    slug: "bracelet-tulip",
    name: "bracelet tulip",
    category: "bijoux",
    price: 40,
    description:
      "Bracelet délicat motif fleurs en plaqué or, orné de cristaux bleus profonds, idéal pour une touche d'élégance.",
    colors: [
      { name: "Or", hex: "#b08d57" },
      { name: "Blanc", hex: "#ffffff" },
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/Zz6yjzjt/Chat-GPT-Image-19-juil-2026-13-51-03.jpg",
      "https://i.ibb.co/SDTzr7fD/Chat-GPT-Image-19-juil-2026-13-52-25.jpg",
    ],
    popularity: 95,
    isFeatured: true,
    isNew: false,
  },
  {
    id: "3",
    slug: "bague-fleur-diamants",
    name: "Bague Pétale Lux - Or",
    category: "bijoux",
    price: 30,
    description: "Bague en acier inoxydable plaqué or, design floral serti de zircons, garantie anti-ternissement et résistante à l'eau.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 2,
    images: ["https://i.ibb.co/nsfNNsSz/Chat-GPT-Image-19-juil-2026-13-42-05.jpg"],
    popularity: 94,
    isFeatured: true,
    isNew: false
  },
  {
    id: "4",
    slug: "bague-solitaire-rose",
    name: "Bague Solitaire Royal - Or",
    category: "bijoux",
    price: 30,
    description: "Bague solitaire en acier inoxydable de haute qualité  avec pierre rose, ne change pas de couleur, garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/Wwz7RMW/Chat-GPT-Image-19-juil-2026-13-47-34.jpg"],
    popularity: 96,
    isFeatured: true,
    isNew: false
  },
  {
    id: "5",
    slug: "boucles-oreilles-signature",
    name: "Boucles d'oreilles Signature",
    category: "bijoux",
    price: 20,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité (finition dorée). Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/7NkNbzKK/Gemini-Generated-Image-yryplgyryplgyryp.jpg",
      "https://i.ibb.co/4ZdmrdjR/Gemini-Generated-Image-fkyp64fkyp64fkyp.jpg",
      "https://i.ibb.co/c0JdMz1/Gemini-Generated-Image-v3jm3wv3jm3wv3jm.jpg"
    ],
    popularity: 90,
    isFeatured: true,
    isNew: false
  },
   {
    id: "6",
    slug: "boucles-oreilles-signature",
    name: "Boucles d'oreilles Signature",
    category: "bijoux",
    price: 20,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité (finition dorée). Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
    
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
    price: 20,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité (finition dorée). Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/c0JdMz1/Gemini-Generated-Image-v3jm3wv3jm3wv3jm.jpg",
    ],
    popularity: 90,
    isFeatured: true,
    isNew: false
  },
  {
    id: "6",
    slug: "boucles-oreilles-color-bleu",
    name: "Boucles d'oreilles Éclat - Bleu",
    category: "bijoux",
    price: 25,
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
    isNew: false
  },
  {
    id: "7",
    slug: "boucles-oreilles-color-rose-bebe",
    name: "Boucles d'oreilles Éclat - Rose Bébé",
    category: "bijoux",
    price: 25,
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
    isNew: false
  },
  {
    id: "8",
    slug: "boucles-oreilles-color-somo",
    name: "Boucles d'oreilles Éclat - Somo",
    category: "bijoux",
    price: 25,
    description: "Paire de boucles d'oreilles en acier inoxydable de haute qualité avec détail coloré. Résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Somo", hex: "#ffa07a" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/cc3TvYnS/Gemini-Generated-Image-2kcwfs2kcwfs2kcw.jpg"
    ],
    popularity: 93,
    isFeatured: true,
    isNew: false
  },
  {
    id: "9",
    slug: "collier-u-moderne",
    name: "Collier U-Link Élégance",
    category: "bijoux",
    price: 45,
    description: "Collier géométrique en acier inoxydable de haute qualité (finition dorée). Design moderne et épuré, résistant à l'eau, ne change pas de couleur. Garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/FSTF0yt/Chat-GPT-Image-Jul-19-2026-11-16-04-AM.jpg"
    ],
    popularity: 95,
    isFeatured: true,
    isNew: false
  },
  {
    id: "10",
    slug: "collier-croissant-lune",
    name: "Collier Croissant de Lune Serti",
    category: "bijoux",
    price: 50,
    description: "Collier pendentif croissant de lune en acier inoxydable de haute qualité, orné de zircons éclatants. Résistant à l'eau, ne change pas de couleur. Garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/9HQSN90d/Chat-GPT-Image-Jul-19-2026-11-18-34-AM.jpg"
    ],
    popularity: 96,
    isFeatured: true,
   isNew: false
  },
  {
    id: "11",
    slug: "collier-goutte-perlee",
    name: "Collier Goutte Nacrée",
    category: "bijoux",
    price: 45,
    description: "Collier délicat avec pendentif en forme de goutte en acier inoxydable de haute qualité. Finition raffinée, résistant à l'eau, ne change pas de couleur. Garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/G4z9v90G/Gemini-Generated-Image-tiywwftiywwftiyw.jpg"
    ],
    popularity: 92,
    isFeatured: true,
    isNew: false
  },
  {
    id: "12",
    slug: "collier-solitaire-prestige",
    name: "Collier Solitaire Prestige",
    category: "bijoux",
    price: 50,
    description: "Collier chaîne fine avec pierre solitaire étincelante en acier inoxydable de haute qualité. Élégant et intemporel, résistant à l'eau, ne change pas de couleur.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/G4cXvs3R/Gemini-Generated-Image-yfmvzvyfmvzvyfmv.jpg"
    ],
    popularity: 94,
    isFeatured: true,
    isNew: false
  },
  {
    id: "13",
    slug: "jonc-minimaliste-lisse",
    name: "Jonc Minimaliste Lisse - Or",
    category: "bijoux",
    price: 30,
    description: "Bracelet jonc rigide et épuré en acier inoxydable de haute qualité. Design intemporel, résistant à l'eau, ne change pas de couleur. Garantie 6 mois incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/PsD0DXky/Gemini-Generated-Image-vuan1avuan1avuan.jpg"
    ],
    popularity: 91,
    isFeatured: true,
    isNew: false
  },
  {
    id: "14",
    slug: "bracelet-bambou-serti ( AG)",
    name: "Bracelet Bambou Serti de Zircons (AG)",
    category: "bijoux",
    price: 60,
    description: "Bracelet rigide inspiré du design bambou en acier inoxydable de haute qualité, rehaussé de zircons étincelants. Résistant à l'eau, ne change pas de couleur.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/Z05PxxT/Chat-GPT-Image-19-juil-2026-13-54-10.jpg"
    ],
    popularity: 93,
    isFeatured: true,
    isNew: false
  },
  {
    id: "15",
    slug: "set-joncs-cise",
    name: "Set de Joncs Ciselés - (Sartla )",
    category: "bijoux",
    price: 55,
    description: "Ensemble de jonc texturés et ajourés en acier inoxydable de haute qualité. Finition raffinée, résistant à l'eau, ne change pas de couleur. Garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/qLb4Dd4h/Chat-GPT-Image-Jul-19-2026-11-30-01-AM.jpg"
    ],
    popularity: 95,
    isFeatured: true,
    isNew: false
  },
  {
    id: "16",
    slug: "jonc-tube-serti",
    name: "Jonc Tube Serti Central",
    category: "bijoux",
    price: 70,
    description: "Bracelet jonc élégant doté d'un cylindre central pavé de zircons en acier inoxydable de haute qualité. Résistant à l'eau, ne change pas de couleur.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/99MCvySK/Chat-GPT-Image-Jul-19-2026-12-01-29-PM.jpg"
    ],
    popularity: 92,
    isFeatured: true,
    isNew: false
  },
  {
    id: "17",
    slug: "set-joncs-multiples-torsades",
    name: "Set Joncs Multiples & Torsades",
    category: "bijoux",
    price: 70,
    description: "Accumulation de bracelets joncs lisses et torsadés en acier inoxydable de haute qualité. Style audacieux et intemporel, résistant à l'eau.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/1YS5pXJk/Chat-GPT-Image-Jul-19-2026-12-06-14-PM.jpg"
    ],
    popularity: 96,
    isFeatured: true,
    isNew: false
  },
  {
    id: "18",
    slug: "bracelet-clou-serti",
    name: "Bracelet Clou Serti Diamanté",
    category: "bijoux",
    price: 35,
    description: "Bracelet design clou élégant entièrement pavé de zircons brillants en acier inoxydable de haute qualité. Ne change pas de couleur, résistant à l'eau.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: [
      "https://i.ibb.co/99RmcJWh/Chat-GPT-Image-Jul-19-2026-12-50-19-PM.jpg"
    ],
    popularity: 98,
    isFeatured: true,
    isNew: false
  },
  {
    id: "19",
    slug: "bague-perlee-zircon",
    name: "Bague Perlée Éclat - Or",
    category: "bijoux",
    price: 30,
    description: "Bague en acier inoxydable de haute qualité plaqué  avec détail perlé et zircon central. Ne change pas de couleur, résistant à l'eau.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/Fbww2Zkh/Chat-GPT-Image-19-juil-2026-13-40-48.jpg"],
    popularity: 92,
    isFeatured: true,
    isNew: false
  },
  {
    id: "20",
    slug: "bague-luxe-geometry",
    name: "Bague Géométrique Luxe ",
    category: "bijoux",
    price: 20,
    description: "Bague moderne en acier inoxydable  au design structuré et lumineux. Résistant à l'eau, ne change pas de couleur, garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/Gf3M8CTH/Chat-GPT-Image-19-juil-2026-13-43-23.jpg"],
    popularity: 93,
    isFeatured: true,
    isNew: false
  },
  {
    id: "21",
    slug: "bague-serti-divine",
    name: "Bague Serti Divine",
    category: "bijoux",
    price: 30,
    description: "Bague élégante entièrement sertie de zircons en acier inoxydable de haute qualité plaqué or. Résistant à l'eau, ne change pas de couleur.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/7tw9b2KK/Chat-GPT-Image-19-juil-2026-13-44-57.jpg"],
    popularity: 95,
    isFeatured: true,
    isNew: false
  },
  {
    id: "22",
    slug: "bague-alliance-zircon",
    name: "Bague Alliance Étincelante ",
    category: "bijoux",
    price: 30,
    description: "Alliance fine en acier inoxydable de haute qualité plaqué or, pavée de zircons brillants. Ne change pas de couleur, résistant à l'eau.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/JwCKgkhG/Chat-GPT-Image-19-juil-2026-13-48-41.jpg"],
    popularity: 94,
    isFeatured: true,
    isNew: false
  },
  {
    id: "23",
    slug: "bracelet-initiale-prestige",
    name: "Bracelet Charm's Initiales & Étoile",
    category: "bijoux",
    price: 35,
    description: "Bracelet chaîne délicat avec médaillon charm's en acier inoxydable de haute qualité plaqué or. Résistant à l'eau, ne change pas de couleur, garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 1,
    images: ["https://i.ibb.co/TMYGb0XR/Chat-GPT-Image-Jul-19-2026-11-31-07-AM.jpg"],
    popularity: 93,
    isFeatured: true,
    isNew: false
  },
  {
    id: "24",
    slug: "bague-minimaliste-croisee",
    name: "Bague Croisée Lumineuse ",
    category: "bijoux",
    price: 30,
    description: "Bague au design croisé épuré en acier inoxydable de haute qualité plaqué or. Ne change pas de couleur, résistant à l'eau, garantie incluse.",
    colors: [
      { name: "Or", hex: "#b08d57" }
    ],
    stock: 2,
    images: [
      "https://i.ibb.co/67T0SGTS/Gemini-Generated-Image-bvl0dcbvl0dcbvl0.jpg"],
    popularity: 91,
    isFeatured: true,
    isNew: false
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


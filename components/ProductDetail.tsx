"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus, Check } from "lucide-react";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function handleAddToCart() {
    addItem(product, color, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem(product, color, quantity);
    router.push("/panier");
  }

  const inStock = product.stock > 0;

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Galerie */}
        <div>
          <div className="relative aspect-[3/4] bg-ivoire overflow-hidden mb-3">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 aspect-[3/4] bg-ivoire overflow-hidden border ${
                    activeImage === i ? "border-or" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Détails */}
        <div>
          <span className="eyebrow text-or-fonce">{product.category}</span>
          <h1 className="font-display text-3xl md:text-4xl mt-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-display text-or-fonce">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-gris-clair line-through text-lg">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <span className="trait-or w-14 my-6" />

          <p className="text-sm text-gris leading-relaxed">
            {product.description}
          </p>

          {/* Couleurs */}
          <div className="mt-8">
            <h3 className="eyebrow mb-3">Couleur : {color}</h3>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`h-9 w-9 rounded-full border-2 transition-all ${
                    color === c.name
                      ? "border-or scale-110"
                      : "border-transparent"
                  }`}
                  style={{ boxShadow: `0 0 0 1px ${c.hex}22` }}
                  aria-label={c.name}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{ backgroundColor: c.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Stock */}
          <p className="mt-6 text-sm">
            {inStock ? (
              <span className="text-noir">
                {product.stock <= 5
                  ? `Plus que ${product.stock} en stock`
                  : "En stock"}
              </span>
            ) : (
              <span className="text-red-600">Rupture de stock</span>
            )}
          </p>

          {/* Quantité */}
          <div className="mt-6 flex items-center gap-4">
            <span className="eyebrow">Quantité</span>
            <div className="flex items-center border border-noir/15">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-3 hover:text-or transition-colors"
                aria-label="Diminuer la quantité"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center text-sm">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((q) => Math.min(product.stock, q + 1))
                }
                className="p-3 hover:text-or transition-colors"
                aria-label="Augmenter la quantité"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className="flex-1 bg-noir text-blanc px-8 py-4 text-sm eyebrow tracking-[0.15em] hover:bg-or transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check size={16} /> Ajouté
                </>
              ) : (
                "Ajouter au panier"
              )}
            </button>
            <button
              onClick={handleBuyNow}
              disabled={!inStock}
              className="flex-1 border border-noir px-8 py-4 text-sm eyebrow tracking-[0.15em] hover:border-or hover:text-or transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Commander maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

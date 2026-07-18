"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-24 text-center">
        <ShoppingBag size={40} className="mx-auto text-gris-clair mb-6" />
        <h1 className="font-display text-2xl md:text-3xl mb-3">
          Votre panier est vide
        </h1>
        <p className="text-gris text-sm mb-8">
          Parcourez notre collection et ajoutez vos coups de cœur.
        </p>
        <Link
          href="/catalogue"
          className="inline-block bg-noir text-blanc px-8 py-3.5 text-sm eyebrow tracking-[0.15em] hover:bg-or transition-colors"
        >
          Voir le catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8 py-12">
      <h1 className="font-display text-3xl md:text-4xl mb-10">Mon panier</h1>

      <div className="divide-y divide-noir/10 border-y border-noir/10">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.color}`}
            className="flex gap-5 py-6"
          >
            <div className="relative w-24 aspect-[3/4] bg-ivoire shrink-0 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-xs text-gris mt-1">Couleur : {item.color}</p>
                <p className="text-or-fonce font-display mt-1">
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center border border-noir/15">
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.color, item.quantity - 1)
                    }
                    className="p-2.5 hover:text-or transition-colors"
                    aria-label="Diminuer"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="w-9 text-center text-sm">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.productId, item.color, item.quantity + 1)
                    }
                    className="p-2.5 hover:text-or transition-colors"
                    aria-label="Augmenter"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                <span className="font-medium w-20 text-right">
                  {formatPrice(item.price * item.quantity)}
                </span>

                <button
                  onClick={() => removeItem(item.productId, item.color)}
                  className="text-gris-clair hover:text-red-600 transition-colors"
                  aria-label="Supprimer"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-end mt-8 gap-1">
        <div className="flex justify-between w-full max-w-xs text-sm text-gris">
          <span>Sous-total</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex justify-between w-full max-w-xs text-lg font-display mt-2">
          <span>Total</span>
          <span className="text-or-fonce">{formatPrice(totalPrice)}</span>
        </div>

        <Link
          href="/commande"
          className="mt-6 w-full max-w-xs text-center bg-noir text-blanc px-8 py-4 text-sm eyebrow tracking-[0.15em] hover:bg-or transition-colors"
        >
          Passer la commande
        </Link>
        <Link
          href="/catalogue"
          className="mt-3 text-sm text-gris hover:text-or transition-colors"
        >
          Continuer mes achats
        </Link>
      </div>
    </div>
  );
}

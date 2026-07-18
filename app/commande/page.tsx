"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";
import { SHOP } from "@/lib/config";
import { saveOrder } from "@/lib/adminStore";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-24 text-center">
        <h1 className="font-display text-2xl md:text-3xl mb-3">
          Votre panier est vide
        </h1>
        <p className="text-gris text-sm mb-8">
          Ajoutez des produits avant de passer commande.
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

  function buildWhatsAppMessage() {
    const lines: string[] = [];
    lines.push(`Nouvelle commande — ${SHOP.name}`);
    lines.push("");
    items.forEach((item, i) => {
      lines.push(
        `${i + 1}. ${item.name} (${item.color}) x${item.quantity} — ${formatPrice(
          item.price * item.quantity
        )}`
      );
    });
    lines.push("");
    lines.push(`Total : ${formatPrice(totalPrice)}`);
    lines.push("");
    lines.push("--- Informations client ---");
    lines.push(`Nom : ${fullName}`);
    lines.push(`Téléphone : ${phone}`);
    lines.push(`Ville : ${city}`);
    lines.push(`Adresse : ${address}`);
    if (comment.trim()) lines.push(`Commentaire : ${comment}`);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !city.trim() || !address.trim()) {
      setError("Merci de renseigner tous les champs obligatoires.");
      return;
    }
    setError("");

    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${SHOP.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    saveOrder({
      id: `CMD-${Date.now()}`,
      date: new Date().toISOString(),
      customerName: fullName,
      phone,
      city,
      address,
      comment,
      items: items.map((i) => ({
        name: i.name,
        color: i.color,
        quantity: i.quantity,
        price: i.price,
      })),
      total: totalPrice,
    });

    window.open(url, "_blank");
    clearCart();
    router.push("/");
  }

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8 py-12">
      <h1 className="font-display text-3xl md:text-4xl mb-10">
        Finaliser la commande
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="eyebrow block mb-2" htmlFor="fullName">
              Nom complet *
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-noir/15 px-4 py-3 text-sm bg-blanc focus:outline-none focus:border-or transition-colors"
              placeholder="Votre nom et prénom"
            />
          </div>

          <div>
            <label className="eyebrow block mb-2" htmlFor="phone">
              Numéro de téléphone *
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-noir/15 px-4 py-3 text-sm bg-blanc focus:outline-none focus:border-or transition-colors"
              placeholder="+212 6 00 00 00 00"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="eyebrow block mb-2" htmlFor="city">
                Ville *
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-noir/15 px-4 py-3 text-sm bg-blanc focus:outline-none focus:border-or transition-colors"
                placeholder="Casablanca"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2" htmlFor="address">
                Adresse *
              </label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-noir/15 px-4 py-3 text-sm bg-blanc focus:outline-none focus:border-or transition-colors"
                placeholder="Rue, numéro, quartier"
              />
            </div>
          </div>

          <div>
            <label className="eyebrow block mb-2" htmlFor="comment">
              Commentaire (optionnel)
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              className="w-full border border-noir/15 px-4 py-3 text-sm bg-blanc focus:outline-none focus:border-or transition-colors resize-none"
              placeholder="Précisions sur la livraison, un cadeau, etc."
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#25D366] text-white px-8 py-4 text-sm eyebrow tracking-[0.15em] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Commander via WhatsApp
          </button>
          <p className="text-xs text-gris-clair text-center">
            Vous serez redirigé vers WhatsApp pour confirmer votre commande.
          </p>
        </form>

        {/* Récapitulatif */}
        <aside className="bg-ivoire p-6 h-fit">
          <h2 className="eyebrow mb-5">Récapitulatif</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.color}`}
                className="flex justify-between text-sm"
              >
                <span className="text-gris">
                  {item.name} ({item.color}) x{item.quantity}
                </span>
                <span className="font-medium shrink-0 ml-2">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-noir/10 mt-5 pt-5 flex justify-between font-display text-lg">
            <span>Total</span>
            <span className="text-or-fonce">{formatPrice(totalPrice)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

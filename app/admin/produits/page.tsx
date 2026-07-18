"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import AdminGate from "@/components/AdminGate";
import AdminShell from "@/components/AdminNav";
import { getStoredProducts, saveProducts } from "@/lib/adminStore";
import { CATEGORIES, formatPrice, Product } from "@/lib/products";

const EMPTY_PRODUCT: Product = {
  id: "",
  slug: "",
  name: "",
  category: "montres",
  price: 0,
  description: "",
  colors: [{ name: "Noir", hex: "#0b0b0a" }],
  stock: 0,
  images: [
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200",
  ],
  popularity: 0,
};

function ProductsContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(getStoredProducts());
  }, []);

  function persist(list: Product[]) {
    setProducts(list);
    saveProducts(list);
  }

  function handleDelete(id: string) {
    if (!confirm("Supprimer ce produit ?")) return;
    persist(products.filter((p) => p.id !== id));
  }

  function handleSave(product: Product) {
    const slug =
      product.slug ||
      product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    if (product.id) {
      persist(
        products.map((p) => (p.id === product.id ? { ...product, slug } : p))
      );
    } else {
      persist([
        ...products,
        { ...product, id: `p-${Date.now()}`, slug },
      ]);
    }
    setEditing(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl md:text-3xl mb-1">Produits</h1>
          <p className="text-sm text-gris">
            {products.length} produit{products.length > 1 ? "s" : ""} au catalogue
          </p>
        </div>
        <button
          onClick={() => setEditing({ ...EMPTY_PRODUCT })}
          className="flex items-center gap-2 bg-noir text-blanc px-5 py-2.5 text-sm eyebrow hover:bg-or transition-colors"
        >
          <Plus size={16} /> Ajouter
        </button>
      </div>

      <div className="border border-noir/10 overflow-x-auto">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="border-b border-noir/10 text-left eyebrow text-xs">
              <th className="p-4">Produit</th>
              <th className="p-4">Catégorie</th>
              <th className="p-4">Prix</th>
              <th className="p-4">Stock</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-noir/5">
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={p.images[0]}
                    alt=""
                    className="w-10 h-12 object-cover bg-ivoire"
                  />
                  {p.name}
                </td>
                <td className="p-4 capitalize">{p.category}</td>
                <td className="p-4">{formatPrice(p.price)}</td>
                <td className="p-4">
                  <span className={p.stock <= 5 ? "text-red-600" : ""}>
                    {p.stock}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setEditing(p)}
                      className="hover:text-or transition-colors"
                      aria-label="Modifier"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="hover:text-red-600 transition-colors"
                      aria-label="Supprimer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <ProductModal
          product={editing}
          onClose={() => setEditing(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

function ProductModal({
  product,
  onClose,
  onSave,
}: {
  product: Product;
  onClose: () => void;
  onSave: (p: Product) => void;
}) {
  const [form, setForm] = useState<Product>(product);
  const [imagesText, setImagesText] = useState(product.images.join("\n"));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave({
      ...form,
      images: imagesText.split("\n").map((s) => s.trim()).filter(Boolean),
    });
  }

  return (
    <div className="fixed inset-0 bg-noir/50 z-50 flex items-center justify-center p-4">
      <div className="bg-blanc max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl">
            {product.id ? "Modifier le produit" : "Nouveau produit"}
          </h2>
          <button onClick={onClose} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="eyebrow block mb-2">Nom</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-noir/15 px-4 py-2.5 text-sm focus:outline-none focus:border-or"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="eyebrow block mb-2">Catégorie</label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value as Product["category"],
                  })
                }
                className="w-full border border-noir/15 px-4 py-2.5 text-sm focus:outline-none focus:border-or"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="eyebrow block mb-2">Prix (MAD)</label>
              <input
                required
                type="number"
                min={0}
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: Number(e.target.value) })
                }
                className="w-full border border-noir/15 px-4 py-2.5 text-sm focus:outline-none focus:border-or"
              />
            </div>
          </div>

          <div>
            <label className="eyebrow block mb-2">Description</label>
            <textarea
              required
              rows={3}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border border-noir/15 px-4 py-2.5 text-sm focus:outline-none focus:border-or resize-none"
            />
          </div>

          <div>
            <label className="eyebrow block mb-2">Stock disponible</label>
            <input
              required
              type="number"
              min={0}
              value={form.stock}
              onChange={(e) =>
                setForm({ ...form, stock: Number(e.target.value) })
              }
              className="w-full border border-noir/15 px-4 py-2.5 text-sm focus:outline-none focus:border-or"
            />
          </div>

          <div>
            <label className="eyebrow block mb-2">
              Photos (une URL par ligne)
            </label>
            <textarea
              rows={3}
              value={imagesText}
              onChange={(e) => setImagesText(e.target.value)}
              className="w-full border border-noir/15 px-4 py-2.5 text-sm focus:outline-none focus:border-or resize-none"
              placeholder="https://..."
            />
            <p className="text-xs text-gris-clair mt-1">
              En production, remplacez par un vrai import de fichiers
              (Firebase Storage / Supabase Storage) — voir GUIDE.md.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-noir text-blanc px-6 py-3 text-sm eyebrow hover:bg-or transition-colors mt-2"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <AdminGate>
      <AdminShell>
        <ProductsContent />
      </AdminShell>
    </AdminGate>
  );
}

"use client";

import { useEffect, useState } from "react";
import { TrendingUp, ShoppingCart, Package, Star } from "lucide-react";
import AdminGate from "@/components/AdminGate";
import AdminShell from "@/components/AdminNav";
import { getStoredOrders, getStoredProducts, Order } from "@/lib/adminStore";
import { formatPrice, Product } from "@/lib/products";

function DashboardContent() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setOrders(getStoredOrders());
    setProducts(getStoredProducts());
  }, []);

  const revenue = orders.reduce((sum, o) => sum + o.total, 0);

  const salesByProduct: Record<string, number> = {};
  orders.forEach((o) =>
    o.items.forEach((i) => {
      salesByProduct[i.name] = (salesByProduct[i.name] || 0) + i.quantity;
    })
  );
  const topProducts = Object.entries(salesByProduct)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const stats = [
    {
      label: "Commandes reçues",
      value: orders.length,
      icon: ShoppingCart,
    },
    {
      label: "Chiffre d'affaires estimé",
      value: formatPrice(revenue),
      icon: TrendingUp,
    },
    {
      label: "Produits au catalogue",
      value: products.length,
      icon: Package,
    },
    {
      label: "Produit le plus vendu",
      value: topProducts[0]?.[0] ?? "—",
      icon: Star,
    },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl mb-1">Tableau de bord</h1>
      <p className="text-sm text-gris mb-8">
        Vue d&apos;ensemble de l&apos;activité de la boutique.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="border border-noir/10 p-6 bg-ivoire">
              <Icon size={18} className="text-or mb-4" />
              <p className="text-2xl font-display">{s.value}</p>
              <p className="text-xs text-gris mt-1">{s.label}</p>
            </div>
          );
        })}
      </div>

      <div className="border border-noir/10 p-6">
        <h2 className="eyebrow text-or-fonce mb-5">
          Produits les plus vendus
        </h2>
        {topProducts.length === 0 ? (
          <p className="text-sm text-gris">
            Aucune vente enregistrée pour le moment.
          </p>
        ) : (
          <ul className="space-y-3">
            {topProducts.map(([name, qty]) => (
              <li
                key={name}
                className="flex justify-between text-sm border-b border-noir/5 pb-3"
              >
                <span>{name}</span>
                <span className="text-or-fonce font-medium">
                  {qty} vendu{qty > 1 ? "s" : ""}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-xs text-gris-clair mt-8">
        Note : ces statistiques sont calculées à partir des commandes passées
        depuis ce navigateur (démo locale). Connectez Firebase/Supabase pour
        un suivi partagé et persistant — voir GUIDE.md.
      </p>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <AdminGate>
      <AdminShell>
        <DashboardContent />
      </AdminShell>
    </AdminGate>
  );
}

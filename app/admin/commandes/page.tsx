"use client";

import { useEffect, useState } from "react";
import AdminGate from "@/components/AdminGate";
import AdminShell from "@/components/AdminNav";
import { getStoredOrders, Order } from "@/lib/adminStore";
import { formatPrice } from "@/lib/products";

function OrdersContent() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getStoredOrders());
  }, []);

  return (
    <div>
      <h1 className="font-display text-2xl md:text-3xl mb-1">Commandes</h1>
      <p className="text-sm text-gris mb-8">
        {orders.length} commande{orders.length > 1 ? "s" : ""} reçue
        {orders.length > 1 ? "s" : ""} via WhatsApp
      </p>

      {orders.length === 0 ? (
        <div className="border border-noir/10 p-10 text-center text-sm text-gris">
          Aucune commande pour le moment.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <div key={o.id} className="border border-noir/10 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <p className="font-medium">{o.customerName}</p>
                  <p className="text-xs text-gris">
                    {new Date(o.date).toLocaleString("fr-FR")}
                  </p>
                </div>
                <span className="text-or-fonce font-display text-lg">
                  {formatPrice(o.total)}
                </span>
              </div>

              <div className="text-sm text-gris grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-4">
                <p>Téléphone : {o.phone}</p>
                <p>Ville : {o.city}</p>
                <p className="sm:col-span-2">Adresse : {o.address}</p>
                {o.comment && (
                  <p className="sm:col-span-2">Commentaire : {o.comment}</p>
                )}
              </div>

              <div className="border-t border-noir/5 pt-3">
                <ul className="text-sm space-y-1">
                  {o.items.map((it, idx) => (
                    <li key={idx} className="flex justify-between text-gris">
                      <span>
                        {it.name} ({it.color}) x{it.quantity}
                      </span>
                      <span>{formatPrice(it.price * it.quantity)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gris-clair mt-8">
        Note : ces commandes sont stockées localement dans ce navigateur
        (démo). Connectez une base de données pour les centraliser — voir
        GUIDE.md.
      </p>
    </div>
  );
}

export default function OrdersPage() {
  return (
    <AdminGate>
      <AdminShell>
        <OrdersContent />
      </AdminShell>
    </AdminGate>
  );
}

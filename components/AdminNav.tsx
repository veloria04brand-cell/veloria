"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingCart, LogOut } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { SHOP } from "@/lib/config";

const LINKS = [
  { href: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/produits", label: "Produits", icon: Package },
  { href: "/admin/commandes", label: "Commandes", icon: ShoppingCart },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout } = useAdminAuth();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blanc">
      <aside className="md:w-64 bg-noir text-blanc flex md:flex-col shrink-0">
        <div className="p-6 hidden md:block">
          <span className="font-display text-xl tracking-[0.1em]">
            {SHOP.name}
          </span>
          <p className="text-xs text-gris-clair mt-1">Administration</p>
        </div>
        <nav className="flex md:flex-col flex-1 px-2 md:px-4 py-2 md:py-4 gap-1 overflow-x-auto">
          {LINKS.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm whitespace-nowrap transition-colors ${
                  active
                    ? "bg-or text-blanc"
                    : "text-gris-clair hover:bg-blanc/10 hover:text-blanc"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={logout}
          className="flex items-center gap-3 px-6 py-4 text-sm text-gris-clair hover:text-blanc transition-colors md:mt-auto"
        >
          <LogOut size={16} />
          Déconnexion
        </button>
      </aside>
      <main className="flex-1 p-6 md:p-10 overflow-x-auto">{children}</main>
    </div>
  );
}

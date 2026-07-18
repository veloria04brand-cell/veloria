"use client";

import { useState, ReactNode } from "react";
import { Lock } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminGate({ children }: { children: ReactNode }) {
  const { isAuthenticated, login } = useAdminAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) return <>{children}</>;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!login(password)) {
      setError("Mot de passe incorrect.");
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-blanc border border-noir/10 p-8"
      >
        <div className="flex items-center gap-2 mb-6">
          <Lock size={18} className="text-or" />
          <h1 className="font-display text-xl">Espace administrateur</h1>
        </div>
        <label className="eyebrow block mb-2" htmlFor="admin-password">
          Mot de passe
        </label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-noir/15 px-4 py-3 text-sm mb-2 focus:outline-none focus:border-or"
          placeholder="••••••••"
        />
        {error && <p className="text-red-600 text-xs mb-3">{error}</p>}
        <button
          type="submit"
          className="w-full bg-noir text-blanc px-6 py-3 text-sm eyebrow tracking-[0.15em] hover:bg-or transition-colors mt-3"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}

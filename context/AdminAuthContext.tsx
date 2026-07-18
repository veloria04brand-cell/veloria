"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// ⚠️ Démo uniquement : mot de passe stocké côté client.
// À remplacer par Firebase Auth / Supabase Auth en production (voir GUIDE.md).
const ADMIN_PASSWORD = "veloria2026";
const SESSION_KEY = "veloria-admin-session";

type AdminAuthContextType = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined
);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const session = window.sessionStorage.getItem(SESSION_KEY);
    if (session === "true") setIsAuthenticated(true);
    setHydrated(true);
  }, []);

  function login(password: string) {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      window.sessionStorage.setItem(SESSION_KEY, "true");
      return true;
    }
    return false;
  }

  function logout() {
    setIsAuthenticated(false);
    window.sessionStorage.removeItem(SESSION_KEY);
  }

  if (!hydrated) return null;

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}

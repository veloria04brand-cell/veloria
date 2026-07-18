"use client";

import { Product, PRODUCTS } from "@/lib/products";

const PRODUCTS_KEY = "veloria-admin-products";
const ORDERS_KEY = "veloria-admin-orders";

export type Order = {
  id: string;
  date: string;
  customerName: string;
  phone: string;
  city: string;
  address: string;
  comment?: string;
  items: { name: string; color: string; quantity: number; price: number }[];
  total: number;
};

export function getStoredProducts(): Product[] {
  if (typeof window === "undefined") return PRODUCTS;
  const raw = window.localStorage.getItem(PRODUCTS_KEY);
  if (!raw) return PRODUCTS;
  try {
    return JSON.parse(raw);
  } catch {
    return PRODUCTS;
  }
}

export function saveProducts(products: Product[]) {
  window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

export function getStoredOrders(): Order[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(ORDERS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  const orders = getStoredOrders();
  orders.unshift(order);
  window.localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

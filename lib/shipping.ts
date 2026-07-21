// Tableau des frais de livraison par ville.
// Basé à El Jadida — ajustez les prix selon vos vrais tarifs.
export const SHIPPING_FEES: Record<string, number> = {
  // Ville de base — livraison locale
  "el jadida": 20,
  "eljadida": 20,

  // Villes proches (moins de 1h-1h30 d'El Jadida)
  "casablanca": 40,
  "azemmour": 45,
  "settat": 45,
  "safi": 45,
  "berrechid": 45,

  // Grandes villes (moyenne distance)
  "rabat": 45,
  "sale": 45,
  "salé": 45,
  "marrakech": 45,
  "khouribga": 45,

  // Villes plus loin
  "fes": 45,
  "fès": 45,
  "meknes": 45,
  "meknès": 45,
  "tanger": 45,
  "tetouan": 45,
  "tétouan": 45,
  "agadir": 45,
  "oujda": 45,
  "nador": 45,
  "laayoune": 45,
  "laâyoune": 45,
  "dakhla": 45,
};

// Frais appliqué si la ville tapée par le client n'est pas dans la liste.
export const DEFAULT_SHIPPING_FEE = 45;

export function getShippingFee(city: string): number {
  const normalized = city
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return SHIPPING_FEES[normalized] ?? DEFAULT_SHIPPING_FEE;
}

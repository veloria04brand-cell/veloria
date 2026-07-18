import Link from "next/link";
import Image from "next/image";
import { Product, formatPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/produit/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-ivoire">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-noir text-blanc text-[10px] tracking-[0.15em] uppercase px-2.5 py-1">
              Nouveau
            </span>
          )}
          {product.oldPrice && (
            <span className="bg-or text-blanc text-[10px] tracking-[0.15em] uppercase px-2.5 py-1">
              Promo
            </span>
          )}
        </div>
        {product.stock <= 5 && (
          <span className="absolute bottom-3 left-3 bg-blanc/90 text-noir text-[10px] tracking-[0.1em] uppercase px-2.5 py-1">
            Stock limité
          </span>
        )}
      </div>
      <div className="pt-4 pb-1">
        <h3 className="text-sm md:text-base font-medium">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-or-fonce font-display text-base">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-gris-clair text-xs line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

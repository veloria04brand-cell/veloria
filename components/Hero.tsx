import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[86vh] min-h-[560px] flex items-end overflow-hidden bg-noir">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/10" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 md:px-8 pb-16 md:pb-20 text-blanc">
        <span className="eyebrow text-or-clair">Nouvelle collection</span>
        <span className="trait-or w-14 my-4" />
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] max-w-2xl">
          L&apos;élégance se porte au quotidien
        </h1>
        <p className="mt-5 max-w-md text-sm md:text-base text-gris-clair">
          Montres, bijoux, sacs et lunettes façonnés pour durer. Commandez en
          quelques clics, recevez chez vous.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/catalogue"
            className="bg-or text-blanc px-8 py-3.5 text-sm eyebrow tracking-[0.15em] hover:bg-or-fonce transition-colors"
          >
            Découvrir la collection
          </Link>
          <Link
            href="/catalogue?categorie=montres"
            className="border border-blanc/40 text-blanc px-8 py-3.5 text-sm eyebrow tracking-[0.15em] hover:border-blanc transition-colors"
          >
            Voir les montres
          </Link>
        </div>
      </div>
    </section>
  );
}

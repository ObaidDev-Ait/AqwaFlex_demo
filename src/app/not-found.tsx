import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-40 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="max-w-2xl">
        <p className="font-technical-sm text-technical-sm uppercase tracking-widest text-on-tertiary-container mb-4">
          Erreur 404
        </p>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
          Page introuvable
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          La page ou le produit que vous recherchez n&apos;existe pas ou n&apos;est plus disponible.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className="px-8 py-4 bg-primary text-on-primary rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:bg-primary-container transition-all"
          >
            Voir nos produits
          </Link>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}

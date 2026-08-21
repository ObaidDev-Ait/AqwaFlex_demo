"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <main className="pt-40 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="max-w-2xl">
        <p className="font-technical-sm text-technical-sm uppercase tracking-widest text-on-tertiary-container mb-4">
          Erreur
        </p>
        <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
          Une erreur est survenue
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          Nous n&apos;avons pas pu afficher cette page. Vous pouvez réessayer ou nous contacter
          directement si le problème persiste.
        </p>
        {error.digest && (
          <p className="font-technical-sm text-technical-sm text-outline mb-8">
            Référence : {error.digest}
          </p>
        )}
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="px-8 py-4 bg-primary text-on-primary rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:bg-primary-container transition-all"
          >
            Réessayer
          </button>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  );
}

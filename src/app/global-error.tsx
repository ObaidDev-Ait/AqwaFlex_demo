"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled root layout error:", error);
  }, [error]);

  return (
    <html lang="fr">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1.5rem", color: "#001e40" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Une erreur est survenue</h1>
        <p style={{ marginBottom: "1.5rem", maxWidth: "40rem" }}>
          Le site est momentanément indisponible. Merci de réessayer dans quelques instants.
        </p>
        {error.digest && (
          <p style={{ marginBottom: "1.5rem", opacity: 0.7 }}>Référence : {error.digest}</p>
        )}
        <button
          type="button"
          onClick={() => unstable_retry()}
          style={{
            padding: "0.875rem 2rem",
            borderRadius: "9999px",
            border: "none",
            background: "#001e40",
            color: "#ffffff",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}

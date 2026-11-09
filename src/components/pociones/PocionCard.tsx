"use client";

import Link from "next/link";
import type { Pocion } from "@/types/api";
import { useState } from "react";

interface PocionCardProps {
  pocion: Pocion;
}

export function PocionCard({ pocion }: PocionCardProps ) {
  // Pasar de "Poción De Regeneración" a "pocion-de-regeneracion" para el png
  const [hasError, setHasError] = useState<boolean>(false);
  const slug = pocion.nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
return (
    <Link href={`/pociones/${pocion.id}`} className="entity-tile">
      <div className="entity-art">
        {!hasError ? (
          <img
            src={`/pociones/${slug}.png`}
            alt={pocion.nombre}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="fallback-art">🧪</span>
        )}
      </div>
      <span className="entity-name">{pocion.nombre}</span>
      <span className="entity-kind">{pocion.rareza}</span>
    </Link>
  );
}
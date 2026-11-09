"use client";

import Link from "next/link";
import type { Structure } from "@/types/api";
import { useState } from "react";

interface StructureCardProps {
  structure: Structure;
}

export function StructureCard({ structure }: StructureCardProps) {
  const [hasError, setHasError] = useState<boolean>(false);

  const slug = structure.nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <Link href={`/structures/${structure.id}`} className="entity-tile">
      <div className="entity-art">
        {!hasError ? (
          <img
            src={`/estructuras/${slug}.png`}
            alt={structure.nombre}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="fallback-art">🏰</span>
        )}
      </div>
      <span className="entity-name">{structure.nombre}</span>
      <span className="entity-kind">{structure.dimension || "Estructura"}</span>
    </Link>
  );
}

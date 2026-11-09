"use client";

import Link from "next/link";
import type { Item } from "@/types/api";
import { useState } from "react";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const [hasError, setHasError] = useState<boolean>(false);

  // Genera el slug limpio a partir de item.name (ej: "Lingote De Hierro" -> "lingote-de-hierro")
  const slug = item.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <Link href={`/items/${item.id}`} className="entity-tile">
      <div className="entity-art">
        {!hasError ? (
          <img
            src={`/items/${slug}.png`}
            alt={item.name}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="fallback-art">📦</span>
        )}
      </div>
      <span className="entity-name">{item.name}</span>
      <span className="entity-kind">{item.category}</span>
      <span className="entity-count">{item.stackSize}</span>
    </Link>
  );
}
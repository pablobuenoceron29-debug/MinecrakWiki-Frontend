import Link from "next/link";
import type { Structure } from "@/types/api";
export function StructureCard({ structure }: { structure: Structure }) {
  return <Link href={`/structures/${structure.id}`} className="entity-tile">
    <div className="entity-art"><img src={`https://minecraft.wiki/Special:FilePath/${encodeURIComponent(structure.nombre.replaceAll(" ", "_"))}.png`} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span className="fallback-art">🏰</span></div>
    <span className="entity-name">{structure.nombre}</span><span className="entity-kind">{structure.dimension || "Estructura"}</span>
  </Link>;
}

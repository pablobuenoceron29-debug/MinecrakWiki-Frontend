import Link from "next/link";
import type { Pocion } from "@/types/api";
export function PocionCard({ pocion }: { pocion: Pocion }) {
  return <Link href={`/pociones/${pocion.id}`} className="entity-tile">
    <div className="entity-art"><img src={`https://minecraft.wiki/Special:FilePath/${encodeURIComponent(pocion.nombre.replaceAll(" ", "_"))}.png`} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span className="fallback-art">🧪</span></div>
    <span className="entity-name">{pocion.nombre}</span><span className="entity-kind">{pocion.rareza}</span>
  </Link>;
}

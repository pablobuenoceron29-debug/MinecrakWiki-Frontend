import Link from "next/link";
import type { Pocion } from "@/types/api";
export function PocionCard({ pocion }: { pocion: Pocion }) {
  // Pasar de "Poción De Regeneración" a "pocion-de-regeneracion" para el png
  const slug = pocion.nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
return (
    <Link href={`/pociones/${pocion.id}`} className="entity-tile">
      <div className="entity-art">
        <img
          src={`/pociones/${slug}.png`}
          alt={pocion.nombre}
          loading="lazy"
          onError={(event) => {
            // ocultar imagen y mostrar respaldo si se borra el png
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="fallback-art">🧪</span>
      </div>
      <span className="entity-name">{pocion.nombre}</span>
      <span className="entity-kind">{pocion.rareza}</span>
    </Link>
  );
}
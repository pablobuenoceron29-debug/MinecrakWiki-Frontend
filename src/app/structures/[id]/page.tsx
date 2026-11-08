"use client";

import { useParams } from "next/navigation";
import { useEntityDetail } from "@/hooks/useEntityDetail";
import { structuresService } from "@/modules/structures/services/structuresService";

export default function StructureDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { entity: structure, loading, error } = useEntityDetail(id, structuresService.getById);

  if (loading) return <div className="p-8 text-2xl text-center font-bold">Cargando estructura...</div>;
  if (error || !structure)
    return <div className="p-8 text-2xl text-red-600 text-center font-bold">Error al cargar la estructura</div>;

  return (
    <div className="p-6 text-stone-900 bg-[#c6b497] border-[8px] border-[#3e2910] max-w-4xl mx-auto mt-4">
      <div className="border-b-4 border-[#8c7e68] mb-6 pb-2">
        <h1 className="text-5xl font-bold mb-1 capitalize">{structure.nombre}</h1>
        <p className="text-lg text-stone-700">(Estructura)</p>
      </div>

      {structure.dimension && (
        <div className="flex gap-4 mb-6">
          <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold uppercase">
            🌍 Dimensión: {structure.dimension}
          </span>
        </div>
      )}

      {structure.descripcion && (
        <>
          <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">Descripción</h2>
          <p className="text-xl leading-relaxed mb-6">{structure.descripcion}</p>
        </>
      )}

      {structure.mobsComunes && structure.mobsComunes.length > 0 && (
        <>
          <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">Mobs que aparecen</h2>
          <ul className="text-xl leading-relaxed mb-6 list-disc pl-6">
            {structure.mobsComunes.map((mob, index) => (
              <li key={`${mob}-${index}`}>{mob}</li>
            ))}
          </ul>
        </>
      )}

      {structure.botin && structure.botin.length > 0 && (
        <>
          <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">Botín</h2>
          <ul className="text-xl leading-relaxed mb-6 list-disc pl-6">
            {structure.botin.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

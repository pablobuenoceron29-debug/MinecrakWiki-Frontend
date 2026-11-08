"use client";

import { useParams } from "next/navigation";
import { useEntityDetail } from "@/hooks/useEntityDetail";
import { mobsService } from "@/modules/mobs/services/mobsService";

export default function MobDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  // Usamos el hook de tu plantilla pasándole el ID y el servicio
  const { entity: mob, loading, error } = useEntityDetail(id, mobsService.getById);

  if (loading) return <div className="p-8 text-2xl text-center font-bold">Cargando pergamino...</div>;
  if (error || !mob) return <div className="p-8 text-2xl text-red-600 text-center font-bold">Error al cargar la criatura</div>;

  return (
    <div className="p-6 text-stone-900 bg-[#c6b497] border-[8px] border-[#3e2910] max-w-4xl mx-auto mt-4">
      {/* Cabecera */}
      <div className="border-b-4 border-[#8c7e68] mb-6 pb-2">
        <h1 className="text-5xl font-bold mb-1 capitalize">{mob.nombre} (Mob)</h1>
        <p className="text-lg text-stone-700">(Página no oficial de Wiki Minecraft)</p>
      </div>

      {/* Stats rápidos */}
      <div className="flex gap-4 mb-6">
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold uppercase">
          ⚔️ Tipo: {mob.tipo}
        </span>
      </div>

      <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">
        Aspecto y Comportamiento
      </h2>
      <p className="text-xl leading-relaxed mb-6">
        {mob.aspectoYComportamiento}
      </p>

      <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">
        Combate y Defensa
      </h2>
      <ul className="text-xl leading-relaxed mb-6 list-disc pl-6">
        {mob.combateYDefensa.map((estrategia, index) => (
          <li key={`${estrategia}-${index}`}>{estrategia}</li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">
        Botín (Drops)
      </h2>
      <div className="bg-[#d5d5d5] border-4 border-stone-400 p-4 flex flex-wrap gap-4">
        {mob.drops.length === 0 && (
          <span className="text-lg text-stone-600">Este mob no suelta botín.</span>
        )}
        {mob.drops.map((drop, index) => (
          <div
            key={`${drop.item}-${index}`}
            className="flex items-center gap-3 bg-[#c3c3c3] border-2 border-stone-400 p-2 w-48 shadow-sm"
          >
            <div className="w-12 h-12 shrink-0 bg-stone-700 flex items-center justify-center text-white text-2xl">
              💎
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">{drop.item}</span>
              <span className="text-sm text-stone-600">{drop.probabilidad_default}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

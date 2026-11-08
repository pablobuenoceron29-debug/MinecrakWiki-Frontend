"use client";

import { useParams } from "next/navigation";
import { useEntityDetail } from "@/hooks/useEntityDetail";
import { pocionesService } from "@/modules/pociones/services/pocionesService";

export default function PocionDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { entity: pocion, loading, error } = useEntityDetail(id, pocionesService.getById);

  if (loading) return <div className="p-8 text-2xl text-center font-bold">Cargando poción...</div>;
  if (error || !pocion)
    return <div className="p-8 text-2xl text-red-600 text-center font-bold">Error al cargar la poción</div>;

  return (
    <div className="p-6 text-stone-900 bg-[#c6b497] border-[8px] border-[#3e2910] max-w-4xl mx-auto mt-4">
      <div className="border-b-4 border-[#8c7e68] mb-6 pb-2">
        <h1 className="text-5xl font-bold mb-1">{pocion.nombre}</h1>
        <p className="text-lg text-stone-700">{pocion.descripcion}</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold uppercase">
          ✨ Efecto: {pocion.efecto}
        </span>
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold">
          💎 Rareza: {pocion.rareza}
        </span>
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold">
          ⏱️ Consumo: {pocion.tiempoConsumo} s
        </span>
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold">
          {pocion.consumible ? "🍶 Consumible" : "No consumible"}
        </span>
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold">
          {pocion.renovable ? "♻️ Renovable" : "No renovable"}
        </span>
      </div>

      <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">Efecto y Uso</h2>
      <p className="text-xl leading-relaxed mb-6">{pocion.efectoYUso}</p>

      <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">Ingrediente Base</h2>
      <p className="text-xl leading-relaxed mb-6">{pocion.ingredienteBase}</p>

      <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">Variantes</h2>
      <ul className="text-xl leading-relaxed mb-6 list-disc pl-6">
        {pocion.variantes.length === 0 && <li>Esta poción no tiene variantes.</li>}
        {pocion.variantes.map((v, index) => (
          <li key={`${v.nombre}-${index}`}>
            {v.nombre} — <span className="text-stone-700">{v.ingrediente}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

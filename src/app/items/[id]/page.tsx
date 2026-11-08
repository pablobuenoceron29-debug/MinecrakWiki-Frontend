"use client";

import { useParams } from "next/navigation";
import { useEntityDetail } from "@/hooks/useEntityDetail";
import { itemsService } from "@/modules/items/services/itemsService";

export default function ItemDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const { entity: item, loading, error } = useEntityDetail(id, itemsService.getById);

  if (loading) return <div className="p-8 text-2xl text-center font-bold">Cargando objeto...</div>;
  if (error || !item) return <div className="p-8 text-2xl text-red-600 text-center font-bold">Error al cargar el ítem</div>;

  return (
    <div className="p-6 text-stone-900 bg-[#c6b497] border-[8px] border-[#3e2910] max-w-4xl mx-auto mt-4">
      <div className="border-b-4 border-[#8c7e68] mb-6 pb-2">
        <h1 className="text-5xl font-bold mb-1">{item.name}</h1>
        <p className="text-lg text-stone-700">(Categoría: {item.category})</p>
      </div>

      <div className="flex gap-4 mb-6">
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold uppercase">
          ✨ Rareza: {item.rarity}
        </span>
        <span className="bg-[#a7987f] px-3 py-1 text-white border-2 border-[#8c7e68] font-bold">
          📦 Stack Máximo: {item.stackSize}
        </span>
      </div>

      <h2 className="text-3xl font-bold border-b-2 border-[#8c7e68] mb-3 pb-1">
        Descripción y Uso
      </h2>
      <p className="text-xl leading-relaxed mb-6">
        {item.description}
      </p>
    </div>
  );
}

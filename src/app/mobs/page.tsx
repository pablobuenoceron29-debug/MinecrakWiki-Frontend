"use client";

import { useEffect, useState } from "react";
import { mobsService } from "@/modules/mobs/services/mobsService";
import type { Mob } from "@/types/api";
import { MobCard } from "@/components/mobs/MobCard";

export default function MobsPage() {
  const [mobs, setMobs] = useState<Mob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMobs = async () => {
      try {
        // Llama al agente de datos que creaste en el paso 3
        const data = await mobsService.getAll();
        setMobs(data);
      } catch (err) {
        setError("Error de conexión con el backend.");
      } finally {
        setLoading(false);
      }
    };
    
    loadMobs();
  }, []);

  if (loading) return <div className="p-8 text-white text-xl">Cargando datos de la wiki...</div>;
  if (error) return <div className="p-8 text-red-500 text-xl">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 uppercase border-b-4 border-stone-400 pb-2">
        Información de Mobs
      </h1>
      
      {/* Contenedor estilo Minecraft Inventory */}
      <div className="bg-[#c6c6c6] border-[6px] border-t-stone-200 border-l-stone-200 border-b-stone-600 border-r-stone-600 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {mobs.map((mob) => (
            <MobCard key={mob.id} mob={mob} />
          ))}
        </div>
      </div>
    </div>
  );
}

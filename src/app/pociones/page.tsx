"use client";

import { useEffect, useState } from "react";
import { pocionesService } from "@/modules/pociones/services/pocionesService";
import type { Pocion } from "@/types/api";
import { PocionCard } from "@/components/pociones/PocionCard";

export default function PocionesPage() {
  const [pociones, setPociones] = useState<Pocion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPociones = async () => {
      try {
        setPociones(await pocionesService.getAll());
      } catch (cause: unknown) {
        setError(cause instanceof Error ? cause.message : "Error de conexión con el backend.");
      } finally {
        setLoading(false);
      }
    };

    loadPociones();
  }, []);

  if (loading) return <div className="p-8 text-white text-xl">Cargando pociones...</div>;
  if (error) return <div className="p-8 text-red-500 text-xl">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 uppercase border-b-4 border-stone-400 pb-2">
        Pociones
      </h1>

      <div className="bg-[#c6c6c6] border-[6px] border-t-stone-200 border-l-stone-200 border-b-stone-600 border-r-stone-600 p-4">
        {pociones.length === 0 ? (
          <p className="text-xl text-stone-700">Aún no hay pociones registradas.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {pociones.map((pocion) => (
              <PocionCard key={pocion.id} pocion={pocion} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

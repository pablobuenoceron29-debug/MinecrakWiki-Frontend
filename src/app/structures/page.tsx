"use client";

import { useEffect, useState } from "react";
import { structuresService } from "@/modules/structures/services/structuresService";
import type { Structure } from "@/types/api";
import { StructureCard } from "@/components/structures/StructureCard";

export default function StructuresPage() {
  const [structures, setStructures] = useState<Structure[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStructures = async () => {
      try {
        setStructures(await structuresService.getAll());
      } catch (cause: unknown) {
        setError(cause instanceof Error ? cause.message : "Error de conexión con el backend.");
      } finally {
        setLoading(false);
      }
    };

    loadStructures();
  }, []);

  if (loading) return <div className="p-8 text-white text-xl">Cargando estructuras...</div>;
  if (error) return <div className="p-8 text-red-500 text-xl">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 uppercase border-b-4 border-stone-400 pb-2">
        Estructuras
      </h1>

      <div className="bg-[#c6c6c6] border-[6px] border-t-stone-200 border-l-stone-200 border-b-stone-600 border-r-stone-600 p-4">
        {structures.length === 0 ? (
          <p className="text-xl text-stone-700">Aún no hay estructuras registradas.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {structures.map((structure) => (
              <StructureCard key={structure.id} structure={structure} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

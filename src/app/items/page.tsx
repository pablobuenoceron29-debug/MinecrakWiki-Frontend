"use client";

import { useEffect, useState } from "react";
import { itemsService } from "@/modules/items/services/itemsService";
import type { Item } from "@/types/api";
import { ItemCard } from "@/components/items/ItemCard";

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await itemsService.getAll();
        setItems(data);
      } catch (err) {
        setError("Error de conexión al cargar los ítems.");
      } finally {
        setLoading(false);
      }
    };
    
    loadItems();
  }, []);

  if (loading) return <div className="p-8 text-white text-xl">Cargando inventario...</div>;
  if (error) return <div className="p-8 text-red-500 text-xl">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-stone-800 mb-6 uppercase border-b-4 border-stone-400 pb-2">
        Guía de Ítems y Materiales
      </h1>
      
      <div className="bg-[#c6c6c6] border-[6px] border-t-stone-200 border-l-stone-200 border-b-stone-600 border-r-stone-600 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

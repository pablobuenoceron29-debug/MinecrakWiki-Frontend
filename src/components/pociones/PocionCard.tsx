import Link from "next/link";
import type { Pocion } from "@/types/api";

interface PocionCardProps {
  pocion: Pocion;
}

export function PocionCard({ pocion }: PocionCardProps) {
  return (
    <Link href={`/pociones/${pocion.id}`}>
      <div className="bg-[#2a2a2a] border-4 border-stone-500 hover:border-white p-2 flex flex-col items-center justify-center cursor-pointer transition-colors aspect-square shadow-md">
        <div className="w-16 h-16 bg-stone-700 mb-2 flex items-center justify-center text-4xl">
          🧪
        </div>
        <span className="text-white text-center text-[14px] leading-tight">
          {pocion.nombre}
        </span>
      </div>
    </Link>
  );
}

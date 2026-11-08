import Link from "next/link";
import type { Structure } from "@/types/api";

interface StructureCardProps {
  structure: Structure;
}

export function StructureCard({ structure }: StructureCardProps) {
  return (
    <Link href={`/structures/${structure.id}`}>
      <div className="bg-[#2a2a2a] border-4 border-stone-500 hover:border-white p-2 flex flex-col items-center justify-center cursor-pointer transition-colors aspect-square shadow-md">
        <div className="w-16 h-16 bg-stone-700 mb-2 flex items-center justify-center text-4xl">
          🏰
        </div>
        <span className="text-white text-center text-[16px] leading-tight capitalize">
          {structure.nombre}
        </span>
      </div>
    </Link>
  );
}

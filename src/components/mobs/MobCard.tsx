import Link from "next/link";
import type { Mob } from "@/types/api";
import Image from "next/image";

interface MobCardProps {
  mob: Mob;
}

export function MobCard({ mob }: MobCardProps) {
  const slug = mob.nombre
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/\s+/g, "-");
  return (
    <Link href={`/mobs/${mob.id}`}>
      <div className="bg-[#2a2a2a] border-4 border-stone-500 hover:border-white p-2 flex flex-col items-center justify-center cursor-pointer transition-colors aspect-square shadow-md">
        {/* Cuadro gris para la imagen pixelada */}
        <div className="w-16 h-16 bg-stone-700 mb-2 flex items-center justify-center text-4xl">
            <Image
              src={`/mobs/${slug}.png`}
              alt={mob.nombre}
              width={48}
              height={48}
              unoptimized
              className="[image-rendering:pixelated]"
            />
        </div>
        <span className="text-white text-center text-[16px] leading-tight capitalize">
          {mob.nombre}
        </span>
      </div>
    </Link>
  );
}

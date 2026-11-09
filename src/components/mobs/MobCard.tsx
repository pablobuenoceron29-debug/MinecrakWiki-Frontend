import Link from "next/link";
import type { Mob } from "@/types/api";

const mobImages: Record<string, string> = {
  creeper: "Creeper.png", zombi: "Zombie.png", zombie: "Zombie.png",
  esqueleto: "Skeleton.png", araña: "Spider.png", enderman: "Enderman.png",
  "esqueleto del wither": "Wither_Skeleton.png", ghast: "Ghast.png", blaze: "Blaze.png",
  slime: "Slime.png", "golem de hierro": "Iron_Golem.png", lobo: "Wolf.png",
  vaca: "Cow.png", cerdo: "Pig.png", oveja: "Sheep.png", gallina: "Chicken.png",
};

export function MobCard({ mob }: { mob: Mob }) {
  const image = mobImages[mob.nombre.toLowerCase()];
  return (
    <Link href={`/mobs/${mob.id}`} className="entity-tile">
      <div className="entity-art">
        {image ? <img src={`https://minecraft.wiki/images/${image}`} alt={mob.nombre} loading="lazy" /> : <span>👾</span>}
      </div>
      <span className="entity-name">{mob.nombre}</span>
      <span className="entity-kind">{mob.tipo}</span>
    </Link>
  );
}

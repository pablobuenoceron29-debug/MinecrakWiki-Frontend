import Link from "next/link";
import type { Item } from "@/types/api";

export function ItemCard({ item }: { item: Item }) {
  const imageName = encodeURIComponent(item.name.replaceAll(" ", "_"));
  return (
    <Link href={`/items/${item.id}`} className="entity-tile">
      <div className="entity-art"><img src={`https://minecraft.wiki/Special:FilePath/${imageName}.png`} alt={item.name} loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} /><span className="fallback-art">📦</span></div>
      <span className="entity-name">{item.name}</span>
      <span className="entity-kind">{item.category}</span>
      <span className="entity-count">{item.stackSize}</span>
    </Link>
  );
}

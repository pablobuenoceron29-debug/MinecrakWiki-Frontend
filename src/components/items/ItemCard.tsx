import Link from "next/link";
import type { Item } from "@/types/api";
import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
public class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
}

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Link href={`/items/${item.id}`}>
      <div className="bg-[#2a2a2a] border-4 border-stone-500 hover:border-white p-2 flex flex-col items-center justify-center cursor-pointer transition-colors aspect-square shadow-md relative">
        {/* Slot visual temporal */}
        <div className="w-12 h-12 bg-stone-700 mb-2 flex items-center justify-center text-2xl text-white">
          📦
        </div>
        <span className="text-white text-center text-[14px] leading-tight truncate w-full">
          {item.name}
        </span>
        <span className="absolute bottom-1 right-1 text-stone-400 text-xs font-mono">
          {item.stackSize}
        </span>
      </div>
    </Link>
  );
}

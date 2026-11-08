export interface Mob {
  id: string;
  name: string;
  health: number;
  type: 'passive' | 'neutral' | 'hostile';
  description: string;
  imageUrl?: string;
}
export interface CreateOrderDto {
  userId: string;
  items: { productId: string; quantity: number }[];
}
export interface Item {
  id: string;
  name: string;
  category: string;
  rarity: 'comun' | 'poco comun' | 'rara' | 'epica';
  description: string;
  stackSize: number;
}

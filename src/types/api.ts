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

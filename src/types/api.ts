export type MobTipo = 'hostil' | 'neutral' | 'pasivo';
export interface MobDrop {
  item: string;
  probabilidad_default: number;
}
export interface Mob {
  id: number;
  nombre: string;
  tipo: MobTipo;
  aspectoYComportamiento: string;
  combateYDefensa: string[];
  drops: MobDrop[];
}
export type CreateMobInput = Omit<Mob, 'id'>;
export type UpdateMobInput = Partial<CreateMobInput>;
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

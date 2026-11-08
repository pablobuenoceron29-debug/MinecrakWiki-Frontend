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
  id: number | string;
  name: string;
  category: string;
  rarity: 'comun' | 'poco comun' | 'rara' | 'epica';
  description: string;
  stackSize: number;
}

export interface Structure {
  id: number | string;
  nombre: string;
  dimension?: string;
  descripcion?: string;
  mobsComunes?: string[];
  botin?: string[];
}

export interface PocionVariante {
  nombre: string;
  ingrediente: string;
}
export interface Pocion {
  id: number;
  nombre: string;
  efecto: 'positivo' | 'negativo';
  descripcion: string;
  efectoYUso: string;
  ingredienteBase: string;
  variantes: PocionVariante[];
  rareza: string;
  tiempoConsumo: number;
  consumible: boolean;
  renovable: boolean;
}

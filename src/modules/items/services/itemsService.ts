import { apiClient } from "@/lib/api";
import type { Item } from "@/types/api";

export const itemsService = {
  getAll: () => apiClient.get<Item[]>("/items"),
  
  getById: (id: string) => apiClient.get<Item>(`/items/${id}`),
  
  create: (data: Partial<Item>) => apiClient.post<Item>("/items", data),
  
  update: (id: string, data: Partial<Item>) => apiClient.put<Item>(`/items/${id}`, data),
  
  delete: (id: string) => apiClient.delete<void>(`/items/${id}`),
};

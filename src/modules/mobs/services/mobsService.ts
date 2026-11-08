import { apiClient } from "@/lib/api";
import type { Mob } from "@/types/api"; 

export const mobsService = {
  getAll: () => apiClient.get<Mob[]>("/mobs"),
  
  getById: (id: string) => apiClient.get<Mob>(`/mobs/${id}`),
  
  create: (data: Partial<Mob>) => apiClient.post<Mob>("/mobs", data),
  
  update: (id: string, data: Partial<Mob>) => apiClient.put<Mob>(`/mobs/${id}`, data),
  
  delete: (id: string) => apiClient.delete<void>(`/mobs/${id}`),
};

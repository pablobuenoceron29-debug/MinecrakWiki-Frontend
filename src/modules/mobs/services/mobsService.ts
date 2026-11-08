import { apiClient } from "@/lib/api";
import type { CreateMobInput, Mob, UpdateMobInput } from "@/types/api";

export const mobsService = {
  getAll: () => apiClient.get<Mob[]>("/mobs"),
  
  getById: (id: string) => apiClient.get<Mob>(`/mobs/${id}`),
  
  create: (data: CreateMobInput) => apiClient.post<Mob>("/mobs", data),

  update: (id: string, data: UpdateMobInput) => apiClient.patch<Mob>(`/mobs/${id}`, data),
  
  delete: (id: string) => apiClient.delete<void>(`/mobs/${id}`),
};

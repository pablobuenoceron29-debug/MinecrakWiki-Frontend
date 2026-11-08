import { apiClient } from "@/lib/api";
import type { Structure } from "@/types/api";

export const structuresService = {
  getAll: () => apiClient.get<Structure[]>("/structures"),

  getById: (id: string) => apiClient.get<Structure>(`/structures/${id}`),

  create: (data: Omit<Structure, "id">) => apiClient.post<Structure>("/structures", data),

  update: (id: string, data: Partial<Omit<Structure, "id">>) =>
    apiClient.patch<Structure>(`/structures/${id}`, data),

  delete: (id: string) => apiClient.delete<void>(`/structures/${id}`),
};

import { apiClient } from "@/lib/api";
import type { Pocion } from "@/types/api";

export const pocionesService = {
  getAll: () => apiClient.get<Pocion[]>("/pociones"),

  getById: (id: string) => apiClient.get<Pocion>(`/pociones/${id}`),

  create: (data: Omit<Pocion, "id">) => apiClient.post<Pocion>("/pociones", data),

  update: (id: string, data: Partial<Omit<Pocion, "id">>) =>
    apiClient.patch<Pocion>(`/pociones/${id}`, data),

  delete: (id: string) => apiClient.delete<void>(`/pociones/${id}`),
};

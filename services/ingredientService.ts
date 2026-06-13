import axios from "axios";
import type { Ingredient } from "@/types/ingredient";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 8000,
});

export const ingredientService = {
  // GET /ingredients
  getAll: async (): Promise<Ingredient[]> => {
    const { data } = await api.get<Ingredient[]>("/ingredients");
    return data;
  },

  // GET /ingredients/:id
  getById: async (id: number): Promise<Ingredient> => {
    const { data } = await api.get<Ingredient>(`/ingredients/${id}`);
    return data;
  },

  // GET /ingredients?category=citrico
  getByCategory: async (category: string): Promise<Ingredient[]> => {
    const { data } = await api.get<Ingredient[]>("/ingredients", {
      params: { category },
    });
    return data;
  },
};
import { useQuery } from "@tanstack/react-query";
import { ingredientService } from "@/services/ingredientService";
import { INGREDIENTS } from "@/constants/ingredients";

export const QUERY_KEYS = {
  all: ["ingredients"] as const,
  byId: (id: number) => ["ingredients", id] as const,
  byCategory: (category: string) => ["ingredients", "category", category] as const,
};

// todos los ingredientes — usa mock si no hay backend
export function useIngredients() {
  const hasBackend = !!process.env.NEXT_PUBLIC_API_URL;

  return useQuery({
    queryKey: QUERY_KEYS.all,
    queryFn: ingredientService.getAll,
    placeholderData: INGREDIENTS,
    enabled: hasBackend,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

// un ingrediente por id
export function useIngredient(id: number) {
  const hasBackend = !!process.env.NEXT_PUBLIC_API_URL;

  return useQuery({
    queryKey: QUERY_KEYS.byId(id),
    queryFn: () => ingredientService.getById(id),
    enabled: hasBackend && !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}

// ingredientes filtrados por categoría
export function useIngredientsByCategory(category: string) {
  const hasBackend = !!process.env.NEXT_PUBLIC_API_URL;

  return useQuery({
    queryKey: QUERY_KEYS.byCategory(category),
    queryFn: () => ingredientService.getByCategory(category),
    enabled: hasBackend && !!category,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
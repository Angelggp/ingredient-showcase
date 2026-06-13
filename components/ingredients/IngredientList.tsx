import IngredientCard from "./IngredientCard";
import { INGREDIENTS } from "@/constants/ingredients";

export default function IngredientList() {
  return (
    <div>
      {INGREDIENTS.map((ingredient, index) => (
        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
          index={index}
        />
      ))}
    </div>
  );
}
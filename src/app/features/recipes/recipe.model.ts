export interface Ingredient {
  quantity: number | null;
  unit: string | null;
  name: string;
}

export interface IngredientGroup {
  title: string | null;
  ingredients: Ingredient[];
}

export interface RecipeStep {
  content: string;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  servings: number | null;
  prepTime: number | null;
  cookTime: number | null;
  tags: string[];
  accent?: string;
  ingredientGroups: IngredientGroup[];
  steps: RecipeStep[];
}

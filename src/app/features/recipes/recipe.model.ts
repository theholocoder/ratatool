export interface Ingredient {
  quantity: number;
  unit: string;
  name: string;
}

export interface RecipeStep {
  content: string;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  servings: number;
  prepTime: number;
  cookTime: number;
  tags: string[];
  accent: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
}

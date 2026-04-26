import { describe, it, expect } from 'vitest';
import { parseRecipe } from './recipe-parser';

const FULL_RECIPE_EN = `# Pasta Carbonara

A silky Roman pasta.

*pasta, italian*

**4 servings, 10 min prep, 20 min cook**

---
### Pasta
- *400 g* spaghetti
- *4* egg yolks
- Pecorino Romano
### Sauce
- *150 g* guanciale
- *1 tsp* black pepper
---

Bring a large pot of salted water to a boil and cook the pasta.

While pasta cooks, render the guanciale until crispy.

Mix egg yolks with Pecorino and toss with pasta off the heat.
`;

const FULL_RECIPE_FR = `# Bol asperges

Description.

*plat, japonais*

**2 portions, 10 min de préparation, 15 min de cuisson**

---
- Asperges vertes
---

Faire cuire le riz.
`;

const UNGROUPED_RECIPE = `# Simple Salad

Fresh salad.

*salad*

**2 servings, 5 min prep, 0 min cook**

---
- *1* cucumber
- *2 tbsp* olive oil
- Lettuce
---

Toss everything together.
`;

const NO_TITLE_MD = `
This has no h1 heading.

Just a paragraph.
`;

describe('parseRecipe', () => {
  describe('preamble', () => {
    it('parses title, description, tags, and yields (English)', () => {
      const recipe = parseRecipe(FULL_RECIPE_EN, 'carbonara');
      expect(recipe).not.toBeNull();
      expect(recipe!.slug).toBe('carbonara');
      expect(recipe!.title).toBe('Pasta Carbonara');
      expect(recipe!.description).toBe('A silky Roman pasta.');
      expect(recipe!.tags).toEqual(['pasta', 'italian']);
      expect(recipe!.servings).toBe(4);
      expect(recipe!.prepTime).toBe(10);
      expect(recipe!.cookTime).toBe(20);
    });

    it('parses yields in French (portions, min de préparation, min de cuisson)', () => {
      const recipe = parseRecipe(FULL_RECIPE_FR, 'asperges');
      expect(recipe).not.toBeNull();
      expect(recipe!.servings).toBe(2);
      expect(recipe!.prepTime).toBe(10);
      expect(recipe!.cookTime).toBe(15);
    });
  });

  describe('ingredients', () => {
    it('parses ingredient with quantity and unit', () => {
      const recipe = parseRecipe(FULL_RECIPE_EN, 'carbonara');
      const spaghetti = recipe!.ingredientGroups[0].ingredients[0];
      expect(spaghetti).toEqual({ quantity: 400, unit: 'g', name: 'spaghetti' });
    });

    it('parses ingredient with quantity only (no unit)', () => {
      const recipe = parseRecipe(FULL_RECIPE_EN, 'carbonara');
      const eggs = recipe!.ingredientGroups[0].ingredients[1];
      expect(eggs).toEqual({ quantity: 4, unit: null, name: 'egg yolks' });
    });

    it('parses ingredient with no quantity and no unit', () => {
      const recipe = parseRecipe(FULL_RECIPE_EN, 'carbonara');
      const pecorino = recipe!.ingredientGroups[0].ingredients[2];
      expect(pecorino).toEqual({ quantity: null, unit: null, name: 'Pecorino Romano' });
    });

    it('preserves multiple named ingredient groups with their titles', () => {
      const recipe = parseRecipe(FULL_RECIPE_EN, 'carbonara');
      expect(recipe!.ingredientGroups).toHaveLength(2);
      expect(recipe!.ingredientGroups[0].title).toBe('Pasta');
      expect(recipe!.ingredientGroups[1].title).toBe('Sauce');
    });

    it('uses a single IngredientGroup with title null for an ungrouped list', () => {
      const recipe = parseRecipe(UNGROUPED_RECIPE, 'salad');
      expect(recipe!.ingredientGroups).toHaveLength(1);
      expect(recipe!.ingredientGroups[0].title).toBeNull();
      expect(recipe!.ingredientGroups[0].ingredients).toHaveLength(3);
    });
  });

  describe('steps', () => {
    it('creates one RecipeStep per block-level node after the second separator', () => {
      const recipe = parseRecipe(FULL_RECIPE_EN, 'carbonara');
      expect(recipe!.steps).toHaveLength(3);
      expect(recipe!.steps[0].content).toBe('Bring a large pot of salted water to a boil and cook the pasta.');
      expect(recipe!.steps[1].content).toBe('While pasta cooks, render the guanciale until crispy.');
      expect(recipe!.steps[2].content).toBe('Mix egg yolks with Pecorino and toss with pasta off the heat.');
    });
  });

  describe('edge cases', () => {
    it('returns null when there is no h1 title', () => {
      expect(parseRecipe(NO_TITLE_MD, 'no-title')).toBeNull();
    });
  });
});

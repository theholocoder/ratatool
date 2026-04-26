import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeCard } from '../recipe-card/recipe-card';

// TODO: replace mock data with real parsed recipes from API
const MOCK_RECIPES: Recipe[] = [
  {
    slug: 'carbonara',
    title: 'Pasta Carbonara',
    description: 'A silky Roman pasta with eggs, Pecorino Romano, guanciale, and coarsely ground black pepper. Done in under 30 minutes.',
    servings: 4,
    prepTime: 10,
    cookTime: 20,
    tags: ['pasta', 'italian'],
    accent: '#f59e0b',
    ingredientGroups: [],
    steps: [],
  },
  {
    slug: 'tarte-tatin',
    title: 'Tarte Tatin',
    description: 'An upside-down caramelized apple tart from the Loire Valley. Served warm with crème fraîche.',
    servings: 8,
    prepTime: 30,
    cookTime: 45,
    tags: ['dessert', 'french'],
    accent: '#f97316',
    ingredientGroups: [],
    steps: [],
  },
  {
    slug: 'tikka-masala',
    title: 'Chicken Tikka Masala',
    description: 'Tender marinated chicken in a rich, aromatic tomato-cream sauce. A crowd-pleasing classic.',
    servings: 4,
    prepTime: 20,
    cookTime: 40,
    tags: ['chicken', 'indian'],
    accent: '#ef4444',
    ingredientGroups: [],
    steps: [],
  },
  {
    slug: 'greek-salad',
    title: 'Greek Salad',
    description: 'Crisp cucumber, ripe tomatoes, kalamata olives, and creamy feta tossed in a tangy oregano vinaigrette.',
    servings: 2,
    prepTime: 15,
    cookTime: 0,
    tags: ['salad', 'vegetarian'],
    accent: '#22c55e',
    ingredientGroups: [],
    steps: [],
  },
  {
    slug: 'boeuf-bourguignon',
    title: 'Boeuf Bourguignon',
    description: 'A rich Burgundy-style braised beef stew with mushrooms, pearl onions, and red wine. Worth every hour.',
    servings: 6,
    prepTime: 30,
    cookTime: 180,
    tags: ['beef', 'french', 'slow-cook'],
    accent: '#8b5cf6',
    ingredientGroups: [],
    steps: [],
  },
  {
    slug: 'banana-pancakes',
    title: 'Banana Pancakes',
    description: 'Fluffy, golden pancakes with mashed banana. Naturally sweet and perfect for lazy weekend mornings.',
    servings: 2,
    prepTime: 5,
    cookTime: 15,
    tags: ['breakfast', 'quick'],
    accent: '#eab308',
    ingredientGroups: [],
    steps: [],
  },
];

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeCard],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeList {
  readonly recipes = MOCK_RECIPES;
}

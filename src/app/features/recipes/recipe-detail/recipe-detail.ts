import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../recipe.model';
import { IngredientList } from '../ingredient-list/ingredient-list';
import { ServingAdjuster } from '../serving-adjuster/serving-adjuster';

const MOCK_RECIPE: Recipe = {
  slug: 'carbonara',
  title: 'Pasta Carbonara',
  description: 'A silky Roman pasta with eggs, Pecorino Romano, guanciale, and coarsely ground black pepper. The key is using the starchy pasta water to create a creamy emulsion — no cream needed.',
  servings: 4,
  prepTime: 10,
  cookTime: 20,
  tags: ['pasta', 'italian', 'quick'],
  accent: '#f59e0b',
  ingredients: [
    { quantity: 400, unit: 'g', name: 'spaghetti or rigatoni' },
    { quantity: 150, unit: 'g', name: 'guanciale (or pancetta)' },
    { quantity: 4, unit: '', name: 'egg yolks' },
    { quantity: 1, unit: '', name: 'whole egg' },
    { quantity: 80, unit: 'g', name: 'Pecorino Romano, finely grated' },
    { quantity: 1, unit: 'tsp', name: 'coarsely ground black pepper' },
    { quantity: 1, unit: 'pinch', name: 'flaky sea salt' },
  ],
  steps: [
    { content: 'Bring a large pot of well-salted water to a boil. Cook pasta until 1 minute before al dente, then reserve 1 cup of pasta water before draining.' },
    { content: 'While pasta cooks, slice guanciale into lardons or strips. Render in a cold pan over medium heat until the fat is translucent and the edges are golden and crispy. Remove from heat.' },
    { content: 'In a small bowl, whisk together the egg yolks, whole egg, and finely grated Pecorino Romano until smooth. Season generously with coarsely ground black pepper.' },
    { content: 'Add the drained pasta to the pan with guanciale (off heat). Toss well to coat every strand in the rendered fat.' },
    { content: 'Pour the egg mixture over the pasta. Toss vigorously while slowly adding pasta water, a splash at a time, until the sauce is glossy, creamy, and clings to the pasta.' },
    { content: 'Serve immediately in warm bowls. Finish with extra Pecorino Romano and a generous crack of black pepper.' },
  ],
};

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink, IngredientList, ServingAdjuster],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetail {
  readonly recipe = MOCK_RECIPE;
}

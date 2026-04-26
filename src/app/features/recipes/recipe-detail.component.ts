import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from './recipe.model';
import { IngredientListComponent } from './ingredient-list.component';
import { ServingAdjusterComponent } from './serving-adjuster.component';

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
  imports: [RouterLink, IngredientListComponent, ServingAdjusterComponent],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">

      <!-- Back link -->
      <a routerLink="/" class="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-8">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to recipes
      </a>

      <!-- Hero header -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2 mb-4">
          @for (tag of recipe.tags; track tag) {
            <span class="text-xs font-medium px-2.5 py-1 rounded-full border border-stone-200 text-stone-500">{{ tag }}</span>
          }
        </div>

        <h1 class="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-4"
            style="font-family: var(--font-serif)">
          {{ recipe.title }}
        </h1>

        <p class="text-stone-500 text-base leading-relaxed max-w-2xl mb-6">
          {{ recipe.description }}
        </p>

        <div class="flex flex-wrap items-center gap-6 text-sm text-stone-500">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            Prep&nbsp;<strong class="text-stone-900 font-semibold">{{ recipe.prepTime }} min</strong>
          </span>
          @if (recipe.cookTime > 0) {
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /><path d="M12 6v6l4 2" />
              </svg>
              Cook&nbsp;<strong class="text-stone-900 font-semibold">{{ recipe.cookTime }} min</strong>
            </span>
          }
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Total&nbsp;<strong class="text-stone-900 font-semibold">{{ recipe.prepTime + recipe.cookTime }} min</strong>
          </span>
        </div>
      </div>

      <!-- Accent divider -->
      <div class="h-px mb-10"
           [style.background]="'linear-gradient(to right, ' + recipe.accent + ' 0%, transparent 60%)'">
      </div>

      <!-- Two-column layout -->
      <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

        <!-- Ingredients panel (sticky on desktop) -->
        <aside class="lg:sticky lg:top-24 lg:self-start">
          <div class="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <!-- Panel header -->
            <div class="flex items-center justify-between px-5 py-4 border-b border-stone-100 bg-stone-50">
              <h2 class="text-sm font-semibold text-stone-900 uppercase tracking-wide">Ingredients</h2>
              <app-serving-adjuster [servings]="recipe.servings" />
            </div>
            <!-- Ingredient list -->
            <div class="px-5 py-4">
              <app-ingredient-list [ingredients]="recipe.ingredients" />
            </div>
          </div>
        </aside>

        <!-- Steps -->
        <main>
          <h2 class="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-7">Instructions</h2>
          <ol class="space-y-7">
            @for (step of recipe.steps; track $index) {
              <li class="flex gap-5 group">
                <div class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm mt-0.5"
                     [style.background-color]="recipe.accent">
                  {{ $index + 1 }}
                </div>
                <p class="text-stone-700 leading-relaxed text-base pt-0.5">{{ step.content }}</p>
              </li>
            }
          </ol>
        </main>

      </div>
    </div>
  `,
  styles: [':host { display: block; }'],
})
export class RecipeDetailComponent {
  readonly recipe = MOCK_RECIPE;
}

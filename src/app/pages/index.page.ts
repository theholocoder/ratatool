import { Component } from "@angular/core";
import { SearchBarComponent } from "../shared/search-bar.component";
import { RecipeListComponent } from "../features/recipes/recipe-list.component";

@Component({
  selector: "app-home",
  imports: [SearchBarComponent, RecipeListComponent],
  template: `
    <!-- Hero section -->
    <section class="bg-white border-b border-stone-100">
      <div class="max-w-6xl mx-auto px-6 py-14">
        <p
          class="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3"
        >
          Your Recipe Book
        </p>
        <h1
          class="text-4xl sm:text-5xl font-bold text-stone-900 mb-4 leading-tight"
          style="font-family: var(--font-serif)"
        >
          What's cooking today?
        </h1>
        <p class="text-stone-500 text-base leading-relaxed mb-7 max-w-lg">
          Find and scale any recipe in seconds. Adjust servings, browse by
          ingredient, and cook with confidence.
        </p>
        <app-search-bar />
      </div>
    </section>

    <!-- Recipe grid -->
    <section class="max-w-6xl mx-auto px-6 py-10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-semibold text-stone-900">All Recipes</h2>
        <span class="text-sm text-stone-400">6 recipes</span>
      </div>
      <app-recipe-list />
    </section>
  `,
})
export default class HomePage {}

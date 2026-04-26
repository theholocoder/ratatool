import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-editor',
  imports: [RouterLink],
  template: `
    <div class="max-w-5xl mx-auto px-6 py-8">

      <!-- Header -->
      <div class="mb-8">
        <a routerLink="/" class="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-4">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to recipes
        </a>
        <h1 class="text-3xl font-bold text-stone-900" style="font-family: var(--font-serif)">New Recipe</h1>
        <p class="text-stone-500 text-sm mt-1">Write your recipe in Markdown format.</p>
      </div>

      <!-- Title field -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-stone-700 mb-1.5" for="recipe-title">
          Title
        </label>
        <input
          id="recipe-title"
          type="text"
          placeholder="e.g. Ratatouille Provençale"
          class="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
        />
      </div>

      <!-- Editor + Preview -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">

        <!-- Markdown editor -->
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium text-stone-700" for="recipe-body">Markdown</label>
          <textarea
            id="recipe-body"
            rows="20"
            placeholder="## Ingredients&#10;- 400g spaghetti&#10;- 150g guanciale&#10;&#10;## Steps&#10;1. Boil a large pot of salted water..."
            class="flex-1 w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 text-sm font-mono leading-relaxed shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
          ></textarea>
        </div>

        <!-- Preview pane -->
        <div class="flex flex-col gap-1.5">
          <span class="text-sm font-medium text-stone-700">Preview</span>
          <div class="flex-1 bg-white border border-stone-200 rounded-xl p-5 shadow-sm min-h-64 flex items-center justify-center">
            <div class="text-center text-stone-400">
              <svg class="w-10 h-10 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p class="text-sm font-medium text-stone-400">Preview will appear here</p>
              <p class="text-xs text-stone-300 mt-1">Start typing in the editor</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-3 pt-2">
        <a routerLink="/" class="px-4 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors rounded-lg hover:bg-stone-100">
          Cancel
        </a>
        <button class="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
          Save Recipe
        </button>
      </div>

    </div>
  `,
  styles: [':host { display: block; }'],
})
export class RecipeEditorComponent {}

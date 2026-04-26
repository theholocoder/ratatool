import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-header",
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm"
    >
      <div
        class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        <a routerLink="/" class="flex items-center gap-2.5 group">
          <div
            class="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center shadow-sm shrink-0"
          >
            <span class="text-white text-sm font-bold leading-none">R</span>
          </div>
          <span
            class="text-lg font-semibold text-stone-900 tracking-tight group-hover:text-amber-600 transition-colors"
            style="font-family: var(--font-serif)"
          >
            Ratatool
          </span>
        </a>

        <nav class="flex items-center gap-6">
          <a
            routerLink="/"
            routerLinkActive="!text-stone-900 font-semibold"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            Recipes
          </a>
          <a
            routerLink="/recipes/new"
            class="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Recipe
          </a>
        </nav>
      </div>
    </header>
  `,
  styles: [":host { display: block; }"],
})
export class HeaderComponent {}

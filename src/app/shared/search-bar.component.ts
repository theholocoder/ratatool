import { Component } from "@angular/core";

@Component({
  selector: "app-search-bar",
  template: `
    <div class="relative w-full max-w-xl">
      <div
        class="absolute inset-y-0 left-4 flex items-center pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-stone-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <input
        type="search"
        placeholder="Search recipes or ingredients…"
        class="w-full pl-12 pr-5 py-3.5 bg-white border border-stone-200 rounded-xl text-stone-900 placeholder:text-stone-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
      />
    </div>
  `,
  styles: [":host { display: block; }"],
})
export class SearchBarComponent {}

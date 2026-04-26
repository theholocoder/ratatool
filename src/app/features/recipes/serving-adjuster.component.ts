import { Component, input } from '@angular/core';

@Component({
  selector: 'app-serving-adjuster',
  template: `
    <div class="flex items-center gap-2">
      <button
        class="w-7 h-7 flex items-center justify-center rounded-md bg-stone-100 hover:bg-stone-200 text-stone-600 text-base leading-none transition-colors"
        aria-label="Decrease servings">
        −
      </button>
      <span class="w-6 text-center text-sm font-semibold text-stone-900 tabular-nums">{{ servings() }}</span>
      <button
        class="w-7 h-7 flex items-center justify-center rounded-md bg-stone-100 hover:bg-stone-200 text-stone-600 text-base leading-none transition-colors"
        aria-label="Increase servings">
        +
      </button>
    </div>
  `,
  styles: [':host { display: block; }'],
})
export class ServingAdjusterComponent {
  servings = input.required<number>();
}

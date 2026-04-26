import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-serving-adjuster',
  templateUrl: './serving-adjuster.html',
  styleUrl: './serving-adjuster.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServingAdjuster {
  servings = input.required<number>();
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCard {
  recipe = input.required<Recipe>();
}

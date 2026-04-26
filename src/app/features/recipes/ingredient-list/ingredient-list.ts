import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { Ingredient } from "../recipe.model";

@Component({
  selector: "app-ingredient-list",
  templateUrl: "./ingredient-list.html",
  styleUrl: "./ingredient-list.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientList {
  ingredients = input.required<Ingredient[]>();
}

import { Component } from '@angular/core';
import { RecipeDetailComponent } from '../../features/recipes/recipe-detail.component';

@Component({
  selector: 'app-recipe-page',
  imports: [RecipeDetailComponent],
  template: `<app-recipe-detail />`,
})
export default class RecipePage {}

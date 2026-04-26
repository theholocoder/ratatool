import { Component } from '@angular/core';
import { RecipeDetail } from '../../features/recipes/recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-page',
  imports: [RecipeDetail],
  template: `<app-recipe-detail />`,
})
export default class RecipePage {}

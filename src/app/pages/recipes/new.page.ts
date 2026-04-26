import { Component } from '@angular/core';
import { RecipeEditor } from '../../features/recipes/recipe-editor/recipe-editor';

@Component({
  selector: 'app-new-recipe-page',
  imports: [RecipeEditor],
  template: `<app-recipe-editor />`,
})
export default class NewRecipePage {}

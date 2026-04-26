import { Component } from '@angular/core';
import { RecipeEditorComponent } from '../../features/recipes/recipe-editor.component';

@Component({
  selector: 'app-new-recipe-page',
  imports: [RecipeEditorComponent],
  template: `<app-recipe-editor />`,
})
export default class NewRecipePage {}

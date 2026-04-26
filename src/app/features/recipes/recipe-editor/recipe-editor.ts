import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-editor',
  imports: [RouterLink],
  templateUrl: './recipe-editor.html',
  styleUrl: './recipe-editor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeEditor {}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A test recipe1',
      'Test description',
      'https://omnivorescookbook.com/wp-content/uploads/2022/02/220203_Chinese-Chicken-Liver-with-Onion-and-Pepper_2-500x500.jpg'
    ),
    new Recipe(
      'A test recipe2',
      'Test description',
      'https://omnivorescookbook.com/wp-content/uploads/2022/02/220203_Chinese-Chicken-Liver-with-Onion-and-Pepper_2-500x500.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

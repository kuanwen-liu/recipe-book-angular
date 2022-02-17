import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}

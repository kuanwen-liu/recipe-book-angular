import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Tomatoes', 1),
  ];
}

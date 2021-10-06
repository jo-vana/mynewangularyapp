import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShopingListService } from "../shopping-list/shoping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'This is the secription of a new test recipe.',
       'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
       [
         new Ingredient('Meat', 1),
         new Ingredient('franch-fries', 20)
       ]),
    new Recipe(
      'Big Fat Burger', 
      'This is the secription of a another test recipe.',
       'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
       [
        new Ingredient('Meat', 1),
        new Ingredient('Bread Buns', 2)
       ])
  ];

  constructor(private slService: ShopingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShopingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
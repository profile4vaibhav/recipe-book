import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'Test Recipe Description',
            'https://i.guim.co.uk/img/media/c63a7652c379e866a04877bcdf44e0d3e8f1aadb/0_366_4278_5195/master/4278.jpg?width=1300&quality=85&fit=max&s=08bf81c2c0e9c879fcb8c2ae21e72584',
            [
                new Ingredient('Veggies', 1),
                new Ingredient('Fries', 20),
            ]
        ),
        new Recipe(
            'Another Test Recipe',
            'Another Test Recipe Description',
            'https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Potato', 1),
            ]
        ),
    ];

    constructor(
        private shoppingListService: ShoppingListService
    ) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}
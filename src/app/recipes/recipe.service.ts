import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test Recipe Description', 'https://i.guim.co.uk/img/media/c63a7652c379e866a04877bcdf44e0d3e8f1aadb/0_366_4278_5195/master/4278.jpg?width=1300&quality=85&fit=max&s=08bf81c2c0e9c879fcb8c2ae21e72584'),
        new Recipe('Another Test Recipe', 'Test Recipe Description', 'https://i.guim.co.uk/img/media/c63a7652c379e866a04877bcdf44e0d3e8f1aadb/0_366_4278_5195/master/4278.jpg?width=1300&quality=85&fit=max&s=08bf81c2c0e9c879fcb8c2ae21e72584'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
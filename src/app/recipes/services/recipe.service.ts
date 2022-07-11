import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    selectedRecipe: EventEmitter<Recipe>;
    private _recipes: Recipe[];
    public get recipes(): Recipe[] {
        return this._recipes;
    }
    public set recipes(value: Recipe[]) {
        this._recipes = value;
    }

    constructor() {
        this.selectedRecipe = new EventEmitter<Recipe>();
        this.recipes = [
            {
                description:
                    'Do demo, do not ask for permission, find examplars, tell ritual tales, and lastly but not least do not give up',
                imageUrl: 'http://image.com/image.png',
                name: 'Recipe for success',
            },
        ];
    }
}

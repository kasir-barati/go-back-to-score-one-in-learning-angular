import { Component, Input, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

const bsDropdownConfig: Partial<BsDropdownConfig> = {
    autoClose: true,
    isAnimated: true,
};

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
    providers: [
        {
            provide: BsDropdownConfig,
            useValue: bsDropdownConfig,
        },
    ],
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
        this.recipeService.selectedRecipe.subscribe((recipe) => {
            this.recipe = recipe;
        });
    }
}

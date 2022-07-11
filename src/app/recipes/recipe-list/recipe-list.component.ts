import {
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];
    @Output()
    clickRecipeItem: EventEmitter<Recipe>;

    constructor() {
        this.clickRecipeItem = new EventEmitter<Recipe>();
        this.recipes = [
            {
                description:
                    'Do demo, do not ask for permission, find examplars, tell ritual tales, and lastly but not least do not give up',
                imageUrl: 'http://image.com/image.png',
                name: 'Recipe for success',
            },
        ];
    }

    onClickRecipeItem(recipe: Recipe) {
        this.clickRecipeItem.emit(recipe);
    }

    ngOnInit(): void {}
}

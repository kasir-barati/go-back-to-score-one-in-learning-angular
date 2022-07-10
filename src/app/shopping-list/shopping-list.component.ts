import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@shared/models/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];
    constructor() {
        this.ingredients = [
            {
                amount: 100,
                name: 'Node.js design patterns',
            },
        ];
    }

    ngOnInit(): void {}
}

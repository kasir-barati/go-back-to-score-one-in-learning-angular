import {
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { Ingredient } from '@shared/models/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
    ingredient: Ingredient;
    @Output()
    addIngredient: EventEmitter<Ingredient>;

    constructor() {
        this.addIngredient = new EventEmitter<Ingredient>();
    }

    ngOnInit(): void {}

    onClickAddShoppingItem(name: string, amount: string) {
        this.ingredient = {
            name,
            amount: Number(amount),
        };
        this.addIngredient.emit(this.ingredient);
    }
}

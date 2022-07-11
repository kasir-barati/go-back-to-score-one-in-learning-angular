import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { Ingredient } from '@shared/models/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('name')
    nameInput: ElementRef;
    @ViewChild('amount')
    amountInput: ElementRef;

    ingredient: Ingredient;
    @Output()
    addIngredient: EventEmitter<Ingredient>;

    constructor() {
        this.addIngredient = new EventEmitter<Ingredient>();
    }

    ngOnInit(): void {}

    // onClickAddShoppingItem(name: string, amount: string) {
    onClickAddShoppingItem() {
        this.ingredient = {
            name: this.nameInput.nativeElement.value,
            amount: Number(this.amountInput.nativeElement.value),
        };
        // this.ingredient = {
        //     name,
        //     amount: Number(amount),
        // };
        this.addIngredient.emit(this.ingredient);
    }
}

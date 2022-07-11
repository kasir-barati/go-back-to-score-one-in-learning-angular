import {
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    @Output()
    clickRecipes: EventEmitter<void>;
    @Output()
    clickShoppingList: EventEmitter<void>;
    @Output()
    clickOddEvenNumber: EventEmitter<void>;

    constructor() {
        this.clickRecipes = new EventEmitter<void>();
        this.clickShoppingList = new EventEmitter<void>();
        this.clickOddEvenNumber = new EventEmitter<void>();
    }

    ngOnInit(): void {}

    onClickRecipes() {
        this.clickRecipes.emit();
    }

    onClickShoppingList() {
        this.clickShoppingList.emit();
    }

    onClickOddEvenNumbers() {
        this.clickOddEvenNumber.emit();
    }
}

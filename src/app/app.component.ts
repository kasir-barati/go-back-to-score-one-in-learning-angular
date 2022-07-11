import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'go-back-to-score-one-in-learning-angular';
    showShoppingList: boolean;
    showRecipes: boolean;
    showOddEvenNumbers: boolean;

    onClickOddEvenNumber() {
        this.showOddEvenNumbers = true;
        this.showShoppingList = false;
        this.showRecipes = false;
    }
    onClickRecipes() {
        this.showRecipes = true;
        this.showShoppingList = false;
        this.showOddEvenNumbers = false;
    }
    onClickShoppingList() {
        this.showShoppingList = true;
        this.showOddEvenNumbers = false;
        this.showRecipes = false;
    }
}

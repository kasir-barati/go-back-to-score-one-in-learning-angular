import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-odd-even-numbers',
    templateUrl: './odd-even-numbers.component.html',
    styleUrls: ['./odd-even-numbers.component.css'],
})
export class OddEvenNumbersComponent implements OnInit {
    latestNumber: number;
    interval: any;
    evenNumbers: number[];
    oddNumbers: number[];

    constructor() {
        this.latestNumber = 0;
        this.evenNumbers = [];
        this.oddNumbers = [];
    }

    ngOnInit(): void {}

    onStart() {
        this.interval = setInterval(() => {
            this.latestNumber += 1;

            const isEven = this.latestNumber % 2 === 0;
            isEven && this.evenNumbers.push(this.latestNumber);
            !isEven && this.oddNumbers.push(this.latestNumber);
        }, 1000);
    }

    onStop() {
        clearInterval(this.interval);
    }

    onClearScreen() {
        this.evenNumbers = [];
        this.oddNumbers = [];
    }
}

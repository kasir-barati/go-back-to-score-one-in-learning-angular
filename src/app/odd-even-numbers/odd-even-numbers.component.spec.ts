import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddEvenNumbersComponent } from './odd-even-numbers.component';

describe('OddEvenNumbersComponent', () => {
    let component: OddEvenNumbersComponent;
    let fixture: ComponentFixture<OddEvenNumbersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OddEvenNumbersComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(OddEvenNumbersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

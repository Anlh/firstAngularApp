import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('amountInput') amountContentInput: ElementRef;
    @ViewChild('nameInput') nameContentInput: ElementRef;
    @Output() shoppingItemCreated = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit() {
    }

    onCreateShopItem() {
        this.shoppingItemCreated.emit(
            new Ingredient(this.nameContentInput.nativeElement.value, this.amountContentInput.nativeElement.value)
        );
    }

}

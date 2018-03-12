import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from "../services/Shopping.service";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('amountInput') amountContentInput: ElementRef;
    @ViewChild('nameInput') nameContentInput: ElementRef;

    constructor(private shoppingService: ShoppingService) {
    }

    ngOnInit() {
    }

    onCreateShopItem() {
        this.shoppingService.addIngredient(
            new Ingredient(this.nameContentInput.nativeElement.value, this.amountContentInput.nativeElement.value)
        );
    }

}

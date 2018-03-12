import {Component, Input, OnInit} from '@angular/core';

import {Recipe} from '../../recipe.model';
import {RecipeService} from "../../services/Recipe.service";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: Recipe; // This decorator allow us to publish this data outside of the component


    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    onSelected() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }

}

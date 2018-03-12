import {EventEmitter} from '@angular/core';

import {Recipe} from '../recipe.model';
import {Ingredient} from "../../shared/ingredient.model";

export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Receita francezinha',
            'Descriçao da francezinha',
            'http://pictures.ozy.com/pictures/1500xany/4/4/5/102445_portugal3.jpg',
            [
                new Ingredient('Bife', 1),
                new Ingredient('Pao', 1)
            ]
        ),
        new Recipe(
            'Bitoque',
            'Descriçao do bitoque',
            'https://media.timeout.com/images/103701660/image.jpg',
            [
                new Ingredient('Bife', 1),
                new Ingredient('Ovo', 1)
            ]
        )
    ];

    getRecipes(): Recipe[] {
        // Since Array are references in memory, we don't want to reference our recipes array directly
        // if we use slice, we will create a copy of our recipes array
        return this.recipes;
    }
}
import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    public recipes: Recipe[] = [
        new Recipe('Receita francezinha', 'Descriçao da francezinha', 'http://pictures.ozy.com/pictures/1500xany/4/4/5/102445_portugal3.jpg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

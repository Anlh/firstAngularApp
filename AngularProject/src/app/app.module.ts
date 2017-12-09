import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-book/recipe-list-item/recipe-list-item.component';
import { RecipeListDetailComponent } from './recipe-book/recipe-list-detail/recipe-list-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        ShoppingListEditComponent,
        RecipeListComponent,
        RecipeListItemComponent,
        RecipeListDetailComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

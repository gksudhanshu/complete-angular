import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipeListComponent } from './recipebook/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipebook/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipebook/recipe-list/recipe-item/recipe-item.component';
import { ShopinglistEditComponent } from './shopinglist/shopinglist-edit/shopinglist-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopinglistComponent,
    RecipebookComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShopinglistEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

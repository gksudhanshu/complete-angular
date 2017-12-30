import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipebook.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe('A test Recipe','This is a simple recipe',
  'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Chicken-Menu-Recipe-Bacon-Dinner-Meat-Dish-2428926.jpg')

];
  constructor() { }

  ngOnInit() {
  }

}

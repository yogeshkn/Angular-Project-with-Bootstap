import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('Recipe 1', "This is Chicken Biryani", "https://cdn5.norecipes.com/wp-content/uploads/2017/05/05021751/chicken-biryani-12-1200x1799.jpg"),
    new Recipe('Recipe 2', "This is Mutton Biryani", "http://www.zyka.com/wp-content/uploads/mutton-biryani3.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}

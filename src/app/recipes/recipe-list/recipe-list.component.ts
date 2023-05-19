import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test', 'assets/OIP (1).jfif'),
    new Recipe('A Test Recipe', 'this is simply a test', 'assets/OIP (2).jfif'),
    new Recipe('A Test Recipe', 'this is simply a test', 'assets/OIP.jfif')
  ];

  constructor() {}
  ngOnInit(): void {  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}

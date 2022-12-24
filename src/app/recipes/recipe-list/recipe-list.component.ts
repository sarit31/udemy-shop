import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter();
  OnSelected(recipe:Recipe)
  {
    this.selectedRecipe.emit(recipe);
  }
  recipes:Recipe[] = [
    new Recipe('Birthday Cake Recipe', 
               'Let\'s prepare a wonderful and delicious cake ', 
               'https://img.taste.com.au/U0t5VNcv/w643-h428-cfill-q90/taste/2021/08/clinkers-cake-173208-2.jpg'
              ),
    new Recipe('Shabbat Cake Recipe', 
               'Let\'s prepare a wonderful and delicious cake ', 
               'https://funcakes.com/content/uploads/2021/10/Choco-cake-960x720-c-default.jpg'
             )];

}

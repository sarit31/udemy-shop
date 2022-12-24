import { Component } from '@angular/core';
import { ingerdient } from '../shared/ingerdient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingerdients:ingerdient[] = [
  new ingerdient('Apples', 50),
  new ingerdient('Oranges', 20),
];


}

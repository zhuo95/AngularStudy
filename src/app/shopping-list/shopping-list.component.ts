import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  choosenIngredient: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
  }

  onAddIngredient(ingredient: Ingredient) {
    if (this.ingredients.length !== 0) {
      let finded = false;
      for (let i = 0 ; i < this.ingredients.length ; i++ ) {
        if (this.ingredients[i].name === ingredient.name ) {
          this.ingredients[i].amount +=  ingredient.amount;
          finded = true;
        }
      }
      if (!finded) {
        this.ingredients.push(ingredient);
      }
    } else {
      this.ingredients.push(ingredient);
    }
  }

  chose(ingredient: Ingredient) {
    this.choosenIngredient = ingredient;
  }
  delete(ingredient: Ingredient ) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name === ingredient.name) {
        this.ingredients.splice(i, 1);
      }
    }
  }
    getColor(ingredient: Ingredient) {
      if (ingredient && this.choosenIngredient) {
        if (ingredient.name === this.choosenIngredient.name) { return '#F5F5F5'; }
      }
      return '#FFFFFF';
    }

    clear() {
      this.ingredients = [];
    }
}

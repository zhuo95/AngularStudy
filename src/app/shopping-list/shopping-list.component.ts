import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  choosenIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient: Ingredient) {
    if (this.ingredients.length !== 0) {
      var finded = false;
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

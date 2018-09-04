import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredient = new EventEmitter<{name: string, amount: number}>();
  @Output() deletedIngredient = new EventEmitter<{name: string, amount: number}>();
  @Output() clearIngredient = new EventEmitter<void>();
  @Input() choosenIngredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, parseInt(this.amountInputRef.nativeElement.value, 10));
    this.ingredient.emit(newIngredient);
  }

  deleteItem() {
    if (this.choosenIngredient) { this.deletedIngredient.emit(this.choosenIngredient); }
  }
  clear() {
    this.clearIngredient.emit();
  }
}

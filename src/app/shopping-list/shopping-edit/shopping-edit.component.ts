import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { threadId } from 'worker_threads';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  endSubs$: Subject<any> = new Subject();
  editMode: boolean = false;
  editedItemIndex: number;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.shoppingListService.startedEditing.pipe(takeUntil(this.endSubs$)).subscribe((index: number) => {
      if (index) {
        this.editMode = true;
        this.editedItemIndex = index;
      }
    })
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy(): void {
    this.endSubs$.complete();
  }

}

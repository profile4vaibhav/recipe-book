import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Recipe Description', 'https://i.guim.co.uk/img/media/c63a7652c379e866a04877bcdf44e0d3e8f1aadb/0_366_4278_5195/master/4278.jpg?width=1300&quality=85&fit=max&s=08bf81c2c0e9c879fcb8c2ae21e72584')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

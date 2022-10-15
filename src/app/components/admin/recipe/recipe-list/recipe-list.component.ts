import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/entities/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  filterText: string = "";

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(): void {
    this.recipeService.getAll().subscribe(response => {
      this.recipes = response.data;
    })
  }

  getRecipeViewById(recipeId: number): void {
    this.router.navigate(["/admin/recipes/view/" + recipeId]).then(() => {
      window.location.reload();
    });
  }

}

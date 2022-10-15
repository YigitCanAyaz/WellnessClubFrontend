import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Recipe } from 'src/app/models/entities/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-remove',
  templateUrl: './recipe-remove.component.html',
  styleUrls: ['./recipe-remove.component.css']
})
export class RecipeRemoveComponent implements OnInit {

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["recipeId"]) {
        this.getRecipeById(params["recipeId"]);
      }
    });
  }

  getRecipeById(id: number): void {
    this.recipeService.getById(id).subscribe(response => {
      this.removeRecipe(response.data);
    })
  }

  removeRecipe(recipe: Recipe): void {
    this.recipeService.delete(recipe).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/recipes/list']).then(() => {
        window.location.reload();
      });
    });
  }
}

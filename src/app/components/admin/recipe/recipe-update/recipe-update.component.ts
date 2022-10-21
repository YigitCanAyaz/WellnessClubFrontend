import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/entities/recipe';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.css']
})
export class RecipeUpdateComponent implements OnInit {

  recipeUpdateForm: FormGroup;
  fileName: string = "";
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["recipeId"]) {
        this.getRecipeById(params["recipeId"]);
      }
    });
  }

  getRecipeById(id: number): void {
    this.recipeService.getById(id).subscribe(response => {
      this.recipe = response.data;
      this.createRecipeUpdateForm();
    })
  }

  createRecipeUpdateForm(): void {
    this.recipeUpdateForm = this.formBuilder.group({
      id: [this.recipe ? this.recipe.id : "", []],
      title: [this.recipe ? this.recipe.title : "", [Validators.required]],
      description: [this.recipe ? this.recipe.description : "", [Validators.required]],
      file: [this.recipe ? this.recipe.imagePath : {}, [Validators.required]]
    });
  }

  updateRecipe(): void {
    console.log(this.recipeUpdateForm.value);
    if (this.recipeUpdateForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.recipeUpdateForm.get('file')?.value);
      formData.append("id", this.recipeUpdateForm.get('id')?.value);
      formData.append("title", this.recipeUpdateForm.get('title')?.value);
      formData.append("description", this.recipeUpdateForm.get('description')?.value);
      this.recipeService.update(formData).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/recipes/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  onFileChange(recipe: any) {

    if (recipe.target.files.length > 0) {
      const file = recipe.target.files[0];
      console.log(file);
      this.recipeUpdateForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }


}

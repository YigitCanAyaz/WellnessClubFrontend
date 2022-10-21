import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipeAddForm: FormGroup;
  fileName: string = "";

  constructor(private recipeService: RecipeService,  private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createRecipeAddForm();
  }

  createRecipeAddForm(): void {
    this.recipeAddForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      file: ["", [Validators.required]]
    });
  }

  addRecipe(): void {
    console.log(this.recipeAddForm.value);
    if (this.recipeAddForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.recipeAddForm.get('file')?.value);
      formData.append("title", this.recipeAddForm.get('title')?.value);
      formData.append("description", this.recipeAddForm.get('description')?.value);
      this.recipeService.add(formData).subscribe(response => {
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
      this.recipeAddForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }

}

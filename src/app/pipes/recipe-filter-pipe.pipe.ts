import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/entities/recipe';

@Pipe({
  name: 'recipeFilterPipe'
})
export class RecipeFilterPipePipe implements PipeTransform {

  transform(value: Recipe[], filterText: string): Recipe[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((recipe: Recipe) => recipe.title.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}

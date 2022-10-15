import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/entities/recipe';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl: string = 'https://localhost:7286/api/recipes/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Recipe>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Recipe>>(path);
  }

  getAllRecipeLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getallrecipelength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Recipe>> {
    const path = this.baseUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Recipe>>(path);
  }

  add(recipe: Recipe): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", recipe);
  }

  update(recipe: Recipe): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", recipe);
  }

  delete(recipe: Recipe): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", recipe);
  }
}

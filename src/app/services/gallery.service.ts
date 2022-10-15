import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gallery } from '../models/entities/gallery';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  baseUrl: string = 'https://localhost:7286/api/galleries/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Gallery>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Gallery>>(path);
  }

  getAllGalleryLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getallgallerylength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Gallery>> {
    const path = this.baseUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Gallery>>(path);
  }

  add(gallery: Gallery): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", gallery);
  }

  update(gallery: Gallery): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", gallery);
  }

  delete(gallery: Gallery): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", gallery);
  }
}

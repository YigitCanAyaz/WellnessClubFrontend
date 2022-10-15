import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaboration } from '../models/entities/collaboration';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {

  baseUrl: string = 'https://localhost:7286/api/collaborations/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Collaboration>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Collaboration>>(path);
  }

  getAllCollaborationLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getallcollaborationlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Collaboration>> {
    const path = this.baseUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Collaboration>>(path);
  }

  add(collaboration: Collaboration): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", collaboration);
  }

  update(collaboration: Collaboration): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", collaboration);
  }

  delete(collaboration: Collaboration): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", collaboration);
  }
}

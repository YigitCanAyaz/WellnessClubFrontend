import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/entities/event';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl: string = 'https://localhost:7286/api/events/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Event>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Event>>(path);
  }

  getAllEventLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getalleventlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<Event>> {
    const path = this.baseUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Event>>(path);
  }

  add(evt: Event): Observable<ResponseModel> {
    console.log(evt);
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", evt);
  }

  update(event: Event): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", event);
  }

  delete(event: Event): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", event);
  }
}

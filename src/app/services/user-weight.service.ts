import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserWeightDetail } from '../models/details/userWeightDetail';
import { UserWeight } from '../models/entities/userWeight';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserWeightService {

  baseUrl: string = 'https://localhost:7286/api/userweights/';

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<SingleResponseModel<UserWeight>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserWeight>>(path);
  }

  getUserWeightDetailsById(id: number): Observable<SingleResponseModel<UserWeightDetail>> {
    const path = this.baseUrl + "getuserweightdetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserWeightDetail>>(path);
  }

  getAll(): Observable<ListResponseModel<UserWeight>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<UserWeight>>(path);
  }

  getAllUserWeightLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getalluserweightlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getAllUserWeightDetails(): Observable<ListResponseModel<UserWeightDetail>> {
    const path = this.baseUrl + 'getalluserweightdetails';
    return this.httpClient.get<ListResponseModel<UserWeightDetail>>(path);
  }

  add(userweight: UserWeight): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", userweight);
  }

  update(userweight: UserWeight): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", userweight);
  }

  delete(userweight: UserWeight): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", userweight);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserHeightDetail } from '../models/details/userHeightDetail';
import { UserHeight } from '../models/entities/userHeight';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserHeightService {

  baseUrl: string = 'https://localhost:7286/api/userheights/';

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<SingleResponseModel<UserHeight>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserHeight>>(path);
  }

  getUserHeightDetailsById(id: number): Observable<SingleResponseModel<UserHeightDetail>> {
    const path = this.baseUrl + "getuserheightdetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserHeightDetail>>(path);
  }

  getAll(): Observable<ListResponseModel<UserHeight>> {
    const path = this.baseUrl + 'getall';
    return this.httpClient.get<ListResponseModel<UserHeight>>(path);
  }

  getAllUserHeightLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getalluserheightlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

  getAllUserHeightDetails(): Observable<ListResponseModel<UserHeightDetail>> {
    const path = this.baseUrl + 'getalluserheightdetails';
    return this.httpClient.get<ListResponseModel<UserHeightDetail>>(path);
  }

  add(userheight: UserHeight): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", userheight);
  }

  update(userheight: UserHeight): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", userheight);
  }

  delete(userheight: UserHeight): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", userheight);
  }

}

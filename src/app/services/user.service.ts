import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForInfoDetail } from 'src/app/models/details/userForInfoDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://localhost:7286/api/users/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<UserForInfoDetail>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<UserForInfoDetail>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<UserForInfoDetail>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserForInfoDetail>>(path);
  }

  getAllUserLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getalluserlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

}

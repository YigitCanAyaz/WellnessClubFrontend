import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOperationClaimDetail } from 'src/app/models/details/userOperationClaimDetail';
import { UserOperationClaim } from 'src/app/models/entities/userOperationClaim';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  baseUrl: string = 'https://localhost:7286/api/useroperationclaims/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<UserOperationClaim>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<UserOperationClaim>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserOperationClaim>>(path);
  }

  add(userOperationClaim: UserOperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", userOperationClaim);
  }

  update(userOperationClaim: UserOperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", userOperationClaim);
  }

  delete(userOperationClaim: UserOperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", userOperationClaim);
  }

  getUserOperationClaimDetailsById(id: number): Observable<SingleResponseModel<UserOperationClaimDetail>> {
    const path = this.baseUrl + "getuseroperationclaimdetailsbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<UserOperationClaimDetail>>(path);
  }
  getAllUserOperationClaimDetails(): Observable<ListResponseModel<UserOperationClaimDetail>> {
    const path = this.baseUrl + 'getalluseroperationclaimdetails';
    return this.httpClient.get<ListResponseModel<UserOperationClaimDetail>>(path);
  }

  getAllUserOperationClaimLength(): Observable<SingleResponseModel<number>> {
    const path = this.baseUrl + 'getalluseroperationclaimlength';
    return this.httpClient.get<SingleResponseModel<number>>(path);
  }

}

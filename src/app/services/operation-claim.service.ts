import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationClaim } from 'src/app/models/entities/operationClaim';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  baseUrl: string = 'https://localhost:44343/api/operationclaims/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<OperationClaim>> {
    const path = this.baseUrl + "getall";
    return this.httpClient.get<ListResponseModel<OperationClaim>>(path);
  }

  getById(id: number): Observable<SingleResponseModel<OperationClaim>> {
    const path = this.baseUrl + "getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<OperationClaim>>(path);
  }

  add(operationClaim: OperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "add", operationClaim);
  }

  update(operationClaim: OperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "update", operationClaim);
  }

  delete(operationClaim: OperationClaim): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.baseUrl + "delete", operationClaim);
  }

}

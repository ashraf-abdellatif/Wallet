import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TransferModel } from './TransferModel';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  ServiceUrl: string = environment.BaseUrl + 'WalletTransfer';
  constructor(private http: HttpClient) { }

  GetAllTransfers(userid:number):Observable<any> {
    return this.http.get<any>(this.ServiceUrl + '/GetAllTransfers/'+ userid);
  }
  Post(model:TransferModel):Observable<any> {
    return this.http.post<any>(this.ServiceUrl + '/Post' , model);
  }
}

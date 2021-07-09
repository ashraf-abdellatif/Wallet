import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserModel } from './UserModel';
import { AuthenticateModel } from './AuthenticateModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  ServiceUrl: string = environment.BaseUrl + 'Users';
  constructor(private http: HttpClient) { }

  Login(model:AuthenticateModel) {
    return this.http.post(this.ServiceUrl + '/authenticate' , model );
  }
  Register(form:UserModel) {
    return this.http.post(this.ServiceUrl + '/AddNewUser' ,form);
  }
}

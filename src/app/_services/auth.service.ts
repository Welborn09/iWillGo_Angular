import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api.response.model';
import { RegisterMember } from '../models/member.model';
import { ApiService } from './api.service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginMember = `${environment.apiRoot}${environment.AUTH_USER}`;
  private readonly registerMember = `${environment.apiRoot}${environment.AUTH_REGISTER}`;
  private readonly logoutMember = `${environment.apiRoot}${environment.AUTH_LOGOUT}`;

  constructor(private api: ApiService) { }

  login (email: string, password: string): Promise<ApiResponse> {
    var user = {"email": email, "password": password};
    var apiResponse: ApiResponse = new ApiResponse();
    return this.api.post(this.loginMember, user)
      .then((response) => {
          //this will return a token
         if (response) {
          apiResponse.succeeded = true;
          apiResponse.responseObj = response;
         } else {
          apiResponse.succeeded = false;
          apiResponse.statusMessage = response;
         }
         return apiResponse;
      });
  }

  register(member: RegisterMember): Promise<ApiResponse> {
    var apiResponse: ApiResponse = new ApiResponse();
    return this.api.post(this.registerMember, member)
      .then((response) => {
        if (response) {
          apiResponse.succeeded = true;
        } else {
          apiResponse.succeeded = false;
          apiResponse.statusMessage = response;
        }
        return apiResponse;
      });
  }

  logout (): Promise<any> {
    return this.api.post(this.logoutMember, { });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api.response.model';
import { RegisterMember } from '../models/member.model';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginMemberSrc = `${environment.apiRoot}${environment.AUTH_USER}`;
  private readonly registerMemberSrc = `${environment.apiRoot}${environment.AUTH_REGISTER}`;
  private readonly logoutMemberSrc = `${environment.apiRoot}${environment.AUTH_LOGOUT}`;

  constructor(private api: ApiService, private storageService: StorageService) { }

  login (email: string, password: string): Promise<ApiResponse> {
    var user = {"email": email, "password": password};
    var apiResponse: ApiResponse = new ApiResponse();
    return this.api.post(this.loginMemberSrc, user)
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
    return this.api.post(this.registerMemberSrc, member)
      .then((response) => {
        if (response) {
          this.storageService.saveUser(response.result);
          apiResponse.succeeded = true;
        } else {
          apiResponse.succeeded = false;
          apiResponse.statusMessage = response;
        }
        return apiResponse;
      });
  }

  logout (): Promise<any> {
    return this.api.post(this.logoutMemberSrc, { });
  }
}

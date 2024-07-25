import { Member } from './../models/member.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse, AuthenticatedResponse } from '../models/api.response.model';
import { RegisterMember } from '../models/member.model';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginMemberSrc = `${environment.apiRoot}${environment.AUTH_USER}`;
  private readonly registerMemberSrc = `${environment.apiRoot}${environment.AUTH_REGISTER}`;
  private readonly logoutMemberSrc = `${environment.apiRoot}${environment.AUTH_LOGOUT}`;

  constructor(private api: ApiService, private storageService: StorageService) { }

  login (email: string, password: string): Promise<AuthenticatedResponse> {
    var user = {"email": email, "password": password};
    var apiResponse: AuthenticatedResponse = new AuthenticatedResponse();
    return this.api.post(this.loginMemberSrc, user)
      .then((response) => {
        //this will return a token
        console.log('*** Login Response ***', response);
        if (response.status !== 200) {
          //we errored
          apiResponse.succeeded = false;
          apiResponse.statusMessage = response.statusText;
          return apiResponse;
        }
         if (response.data.userFound) {

          console.log('*** Login Response Token ***', response.data.token);
          this.storageService.saveToken(response.data.token); //save token to session
          this.storageService.saveUser(response.data.member.id); //save user to session
          localStorage.setItem("jwt", response.data.token);
          apiResponse.succeeded = true;
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
        console.log('*** api=>register response ***', response);
        if (response) {
          this.storageService.saveUser(response.data.result);
          apiResponse.succeeded = true;
        } else {
          apiResponse.succeeded = false;
          apiResponse.statusMessage = response;
        }
        return apiResponse;
      });
  }

  logout (): Promise<any> {
    this.storageService.clean();
    window.location.reload();
    return Promise.resolve(true);
  }
}

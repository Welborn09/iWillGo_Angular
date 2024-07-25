
import axios, { AxiosInstance } from 'axios';
import { Injectable } from "@angular/core";
import { ApiResponse } from "../models/api.response.model";
import { environment } from '../../environments/environment';
import { StorageService } from './storage.service';



@Injectable({ providedIn: 'root' })
export class ApiService {
  private axiosInstance: AxiosInstance;

  token: string = '';

  constructor(private storageService: StorageService) {
    this.token = storageService.getToken();
    console.log('*** ApiService getToken ***', this.token);
    if (!this.axiosInstance)
      this.createInstance();
   }

  createInstance() {
    console.log('*** ApiService creating axios instance ***');
    this.axiosInstance = axios.create({
      baseURL: `${environment.apiRoot}`+'api', // Update with your API base URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token.toString()
      }
    });
    this.axiosInstance.defaults.headers.common = {'Authorization': 'Bearer ' + this.token.toString()}
  }

  get(endpoint: string): Promise<any> {
    if (!this.axiosInstance)
      this.createInstance();
    return this.axiosInstance.get(endpoint)
      .then((data: any) => {
        console.log('*** returning api.get response ***', data);
        return data;
      })
      .catch((err) => {
        console.log('*** returning api.get ERROR response ***', err);
        console.error(err);
        return err.response;
      });
  }


  post(endpoint: string, object: any): Promise<any> {
    if (!this.axiosInstance)
      this.createInstance();
    console.log('*** post -> object ***', object);
    return this.axiosInstance.post(endpoint, object)
      .then((data: any) => {
        console.log('*** post -> response ***', data);
        return data;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }
}

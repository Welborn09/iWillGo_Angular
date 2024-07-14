
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
    this.token = storageService.getUser();
    this.axiosInstance = axios.create({
      baseURL: `${environment.apiRoot}`+'api', // Update with your API base URL
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });
   }

  get(endpoint: string): Promise<any> {
    return this.axiosInstance.get(endpoint)
      .then((data: any) => {
        console.log('*** returning api.get response ***', data);
        return data;
      })
      .catch((err) => {
        console.log('*** returning api.get ERROR response ***', err);
        console.error(err);
        return null;
      });
  }


  post(endpoint: string, object: any): Promise<any> {
    return this.axiosInstance.post(endpoint, object)
      .then((data: any) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }
}

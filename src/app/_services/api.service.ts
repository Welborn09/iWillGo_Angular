import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResponse } from "../models/api.response.model";



@Injectable({ providedIn: 'root' })
export class ApiService {
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  constructor(private http: HttpClient) { }

  get(endpoint: string): Promise<any> {
    const requestOptions = {
      headers: new HttpHeaders(this.headerDict),
    };
    return this.http.get(endpoint, requestOptions).toPromise()
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


  post<T>(endpoint: string, object: T): Promise<T> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    const requestOptions = {
      headers: new HttpHeaders(this.headerDict),
    };

    return this.http.post<T>(endpoint, object, requestOptions).toPromise()
      .then((data: T) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
  }
}

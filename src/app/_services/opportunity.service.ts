import { environment_global } from './../../environments/environment.global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from './../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: HttpClient) { }

  getOpportunities(): Observable<any> {
    return this.http.get(environment.API_EVENTS_URL,
       { responseType: 'json'})
  }

  getOpportunity(memberId: string): Observable<any> {
    return this.http.get(environment.API_EVENTS_BY_ID_URL.replace('{eventId}', memberId),
        { responseType: 'json'});
  }

}

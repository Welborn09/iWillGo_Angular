import { environment_global } from './../../environments/environment.global';

import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {environment} from './../../environments/environment';
import { ApiService } from './api.service';
import { Opportunity, OpportunityResponse } from '../models/opportunity.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OpportunityService {


  private readonly getOppSrc = `${environment.apiRoot}${environment.API_EVENTS_URL}`;
  private readonly getOppByMemberSrc = `${environment.apiRoot}${environment.API_EVENTS_BY_MEMBERID_URL}`;

  constructor(private api: ApiService, private http: HttpClient) { }

  //HttpClient Test
  getOpportunities_Http(memberId: string = null): Observable<any> {
    console.log('*** getOpp service=> memberId ***', memberId);
    var url = memberId == null ? this.getOppSrc : this.getOppByMemberSrc.replace('{memberId}', memberId);

    return this.http.get(url, { headers: new HttpHeaders(
      {'Access-Control-Allow-Origin': 'http://localhost:4200',
       'Content-Type': 'application/json',
       'Access-Control-Allow-Credentials': 'true'
      })
    })
      .pipe(
        catchError(error => {
          console.log('*** api get error ***', error);
          return throwError(() => new Error(error));
        })
      );

    // .subscribe({
    //   next: (response: OpportunityResponse) => {
    //       console.log('*** getOpportunities=>response ***', response);
    //       var oppResponse = new OpportunityResponse();
    //       return oppResponse;
    //   },
    //   error: (err: HttpErrorResponse) => console.log('*** api get error ***', err)
    // });


      // .then((response) => {
      //   console.log('*** getOpportunities=>response ***', response);
      //   var oppResponse = new OpportunityResponse();

      //   if (response.status === 401) {
      //     oppResponse.isAuthorized = false;
      //     return oppResponse;
      //   }

      //   if (response) {
      //    oppResponse.items = response.data.items;
      //    oppResponse.count = response.data.count;
      //    oppResponse.isAuthorized = true;
      //    return oppResponse;
      //  } else {
      //     oppResponse.items = [];
      //     oppResponse.count = '0';
      //     oppResponse.isAuthorized = true;
      //     return oppResponse;
      //  }
      // });
  }

  getOpportunities(memberId: string = null): Promise<OpportunityResponse> {
    console.log('*** getOpp service=> memberId ***', memberId);
    var url = memberId == null ? this.getOppSrc : this.getOppByMemberSrc.replace('{memberId}', memberId);
    console.log('*** getOpp service=> url ***', url);
    return this.api.get(url)
      .then((response) => {
        console.log('*** getOpportunities=>response ***', response);
        var oppResponse = new OpportunityResponse();

        if (response.status === 401) {
          oppResponse.isAuthorized = false;
          return oppResponse;
        }

        if (response) {
         oppResponse.items = response.data.items;
         oppResponse.count = response.data.count;
         oppResponse.isAuthorized = true;
         return oppResponse;
       } else {
          oppResponse.items = [];
          oppResponse.count = '0';
          oppResponse.isAuthorized = true;
          return oppResponse;
       }
      });
  }

  getOpportunity(memberId: string): Promise<Opportunity> {
    return this.api.get(environment.API_EVENTS_BY_ID_URL.replace('{eventId}', memberId))
      .then((response) => {
        return response;
      });
  }

}

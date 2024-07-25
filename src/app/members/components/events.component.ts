import { OpportunityService } from './../../_services/opportunity.service';
import { Component, inject, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Opportunity, OpportunityResponse } from "../../models/opportunity.model";
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { StorageService } from '../../_services/storage.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [ CommonModule, SharedModule ],
  styleUrl: './events.component.css',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  @Input() memberId: string;

  events: Opportunity[]
  dataLoaded: Promise<boolean>;


  constructor(private router: Router,
              private oppService: OpportunityService,
              private storageService: StorageService ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn())
      this.loadData();
  }

  loadData() {
    var useMember = this.memberId ? this.memberId : null;
    console.log('*** events=>memberId ***', useMember);

    this.oppService.getOpportunities_Http(useMember)
    .subscribe({
        next: (response) => {
            console.log('*** getOpportunities=>response ***', response);
            var oppResponse = new OpportunityResponse();
            return oppResponse;
        },
        error: error => {
          console.log('*** getOpportunities=>error response ***', error);
        }
      });


    // this.oppService.getOpportunities(useMember)
    //   .then((response) => {
    //     console.log('*** loadData=>response ***', response);
    //     if (!response.isAuthorized) {
    //       //this.router.navigate(['/login']);
    //       return;
    //     }
    //     if (response.items) {
    //       this.events = response.items;
    //       this.dataLoaded = Promise.resolve(true);
    //     } else {
    //       this.events = [];
    //     }
    //   });
  }

  ConvertDate(date) {
    console.log('*** incoming date ***', date);
    var dt = new Date(date);
    const day = dt.getDate();
    const month = dt.toLocaleString('default', { month: 'long' });

    var ret = day + ' ' + month;
    console.log(ret);
    return ret;
  }

  ConvertTime(time) {

  }
}

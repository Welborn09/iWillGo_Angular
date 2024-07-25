import { OpportunityService } from './../../_services/opportunity.service';
import { Component, inject, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Opportunity } from "../../models/opportunity.model";
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { StorageService } from '../../_services/storage.service';
import { EventsComponent } from '../components/events.component';
import { MemberNavComponent } from '../components/member.nav.component';

@Component({
  selector: 'app-member-events',
  styleUrl: './my.events.component.css',
  templateUrl: './my.events.component.html'
})
export class MemberEventsComponent implements OnInit {

  memberId: string;


  constructor(private router: Router,
              private oppService: OpportunityService,
              private storageService: StorageService ) {

              }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.memberId = this.storageService.getMemberId();
      console.log('*** my.events.component => memberId ***', this.memberId);
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";
import { StorageService } from '../../_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class MemberHomeComponent implements OnInit {

  constructor(private router: Router, private storageService: StorageService) {}


  ngOnInit(): void {
    console.log('*** MemberHome constructor ***');
    //check if we are an authenticated user
    if (!this.storageService.isLoggedIn())
      this.router.navigate(['/login']);
  }

}

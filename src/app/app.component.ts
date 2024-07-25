import { Component, OnInit } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  title = 'IQillGo';
  username: string = '';

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
      this.isLoggedIn = this.storageService.isLoggedIn();

      // if (this.isLoggedIn) {
      //   const user = this.storageService.getUser();
      //   this.username = user.username;
      // }
  }
}

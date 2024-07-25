import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  user = {
    "email": '',
    "password": ''
  }

  constructor (private router: Router, private authService: AuthService) {

   }

  ngOnInit(): void {

  }

  login() {
    this.authService.login(this.user.email, this.user.password)
      .then((response) => {
        if (response.succeeded) {
          setTimeout(() => {
            //navigate to home page
            console.log('*** login success - transfering to home page ***');
            this.router.navigate(['/member/home']);
          }, 5000);
        } else {
          console.log('*** login !succeeded response ***', response);
          //display statusMessage
        }
      });
  }

  setEmail(value) {
    console.log('*** setEmail ***', value);
    this.user.email = value;
  }

  setPassword(value) {
    console.log('*** setPass ***', value);
    this.user.password = value;
  }
}

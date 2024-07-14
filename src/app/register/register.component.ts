import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Member, RegisterMember } from '../models/member.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  member: RegisterMember;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  confirmed: boolean = false;

  constructor(private authService: AuthService) {
    this.member = new RegisterMember();
  }

  onSubmit(): void {
    console.log('*** Register onSubmit entered ***', this.member);
    this.authService.register(this.member)
      .then((response) => {
        console.log('*** register reponse ***', response);
        if (response.succeeded) {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        } else {
          this.errorMessage = response.statusMessage;
          this.isSignUpFailed = true;
        }
      });
  }

  setFirst(value) {
    this.member.firstname = value;
  }

  setLast(value) {
    this.member.lastname = value;
  }

  setEmail(value) {
    this.member.email = value;
  }

  setPassword(value) {
    this.member.password = value;
  }

  setConfirmed(value) {
    this.confirmed = value;
  }

}

import { Component } from "@angular/core";
import { AuthService } from "../../_services/auth.service";
import { Router } from "@angular/router";
import { AppModule } from "../../app.module";



@Component({
  selector: 'app-member-nav',
  templateUrl: './member.nav.component.html',
  styleUrl: './member.nav.component.css'
})
export class MemberNavComponent {

  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout()
      .then(() => {
        this.authService.logout();
      });
  }
}

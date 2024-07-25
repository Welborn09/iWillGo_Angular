import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { CarouselComponent } from './components/carousel.component';
import { NavComponent } from './components/nav.component';
import { FeaturesComponent } from './components/features.component';
import { TimelineComponent } from './components/timeline.component';
import { SignUpComponent } from './components/signup.component';
import { UserService } from './_services/user.service';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { FormsModule } from '@angular/forms';
import { OpportunityService } from './_services/opportunity.service';
import { ApiService } from './_services/api.service';
import { EventsComponent } from './members/components/events.component';
import { MemberHomeComponent } from './members/home/home.component';
import { CustomTimePipe } from './_helpers/custom-time.pipe';
import { SharedModule } from './shared/shared.module';
import { MemberHomeSectionComponent } from './members/components/home.section.component';
import { MemberNavComponent } from './members/components/member.nav.component';
import { MemberEventsComponent } from './members/events/my.events.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    CarouselComponent,
    FeaturesComponent,
    TimelineComponent,
    SignUpComponent,
    MemberHomeComponent,
    MemberNavComponent,
    MemberHomeSectionComponent,
    MemberEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EventsComponent,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7271"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [httpInterceptorProviders,
    ApiService,
    UserService,
    StorageService,
    AuthService,
    OpportunityService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

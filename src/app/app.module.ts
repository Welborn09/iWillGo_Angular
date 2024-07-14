import { NgModule } from '@angular/core';
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
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders,
    ApiService,
    UserService,
    StorageService,
    AuthService,
    OpportunityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

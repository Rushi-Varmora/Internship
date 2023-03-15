import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LandingComponent } from './component/landing/landing.component';
import { HeaderComponent } from './component/header/header.component';
import { BookmovieComponent } from './component/bookmovie/bookmovie.component';
import { CreateComponent } from './component/movies/create/create.component';
import { FooterComponent } from './component/footer/footer.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { TheatreComponent } from './component/theatre/theatre.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LandingComponent,
    HeaderComponent,
    BookmovieComponent,
    CreateComponent,
    FooterComponent,
    MovieDetailComponent,
    TheatreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

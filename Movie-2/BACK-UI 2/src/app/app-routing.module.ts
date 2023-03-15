import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmovieComponent } from './component/bookmovie/bookmovie.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingComponent } from './component/landing/landing.component';
import { LoginComponent } from './component/login/login.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { CreateComponent } from './component/movies/create/create.component';
import { SignupComponent } from './component/signup/signup.component';

import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
  path:'login',
  component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'dashboard',component:DashboardComponent , canActivate:[AuthGuard]
  },
  {
    path:'landing',component:LandingComponent , canActivate:[AuthGuard]
  },
  {
    path:'bookmovie',component:BookmovieComponent , canActivate:[AuthGuard]
  },
  {
    path:'createmovie', component:CreateComponent , canActivate:[AuthGuard]
  },
  {
    path:'movie-detail', component:MovieDetailComponent , canActivate:[AuthGuard]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie-model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  currentSearchedMovie : string ='';

public users:any=[];
public fullname : string = "";
dataArr:any;

constructor(  private auth:AuthService, private api: ApiService, private userStore: UserStoreService ,public router: Router){}


ngOnInit (){  
  
  this.api.getMovies().subscribe(res =>{
    this.movies = res;
   });


      
  
}

moreinfo(Id:any){
  
  localStorage.setItem("flag","1");
  this.router.navigate(['movie-detail'],{
    state:{
      data:Id
    }
  })
}

  
}

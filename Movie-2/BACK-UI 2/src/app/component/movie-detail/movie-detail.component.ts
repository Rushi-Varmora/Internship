import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{
  id = 0;
  movie: any;
  isMovieLoaded = false;
  movieId : any;
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ApiService) { 
      if(localStorage.getItem("flag")=="1"){
        debugger
        this.id = this.router.getCurrentNavigation()?.extras.state?.['data'];
        console.log(this.movieId);
        console.log(this.id);
      }
    }

    ngOnInit(): void {
      
        let id = this.id;
            if(id != null)
              {
                    this.movieId = +id;
  
                    this.api.getMovieById(+id).subscribe(res =>
                    {
                      if(res != null)
                      {
                        this.isMovieLoaded = true;
                      }
  
                      this.movie = res;
                    })
  
              }
          
        
    }
}

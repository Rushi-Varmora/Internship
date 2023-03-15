import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string = "https://localhost:7034/api/User/"
  private baseUrl2:string = "https://localhost:7034/api/Movie/"
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  getMovies(){
    return this.http.get<Movie[]>("https://localhost:7034/api/Movie");
  }

  getMovieById(id:number) : Observable<Movie>
   {
      return this.http.get<Movie>(this.baseUrl2 + 'get-movie/'+id);
   }
  
}

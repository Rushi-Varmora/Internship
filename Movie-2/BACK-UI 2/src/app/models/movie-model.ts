export class Movie {

  //Fields
  id: Number
  movieName : String
  img : String
  ratings : String
  director: String
  summary : String
  release : String
  duration :Number

  constructor (id: Number,movieName: String,img: String,ratings: String,director: String,summary: String,release: String,duration:Number){
    this.id = id,
    this.movieName = movieName,
    this.img = img,
    this.ratings = ratings,
    this.director = director,
    this.summary = summary,
    this.release = release,
    this.duration=duration

  }}

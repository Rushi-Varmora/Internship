import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private fb: FormBuilder , private auth:AuthService){

  }
  createMovieForm!:FormGroup;


  ngOnInit(): void{ 
    this.createMovieForm = this.fb.group({
      movieName: ['',Validators.required],
      img: ['',Validators.required],
      ratings: ['',Validators.required],
      director: ['',Validators.required],
      summary: ['',Validators.required],
      release: ['',Validators.required],
      duration:['',Validators.required]
    })
  }

  onSubmit(){
    if(this.createMovieForm.valid){
      //perform logic for signup
      console.log(this.createMovieForm.value)    
      this.auth.createMovie(this.createMovieForm.value)
      .subscribe({
        next:((res: { message: any; })=>{
          alert(res.message)
        })
        ,error:((err: { error: { message: any; }; })=>{
          alert(err?.error.message)
        })
      })

      this.createMovieForm.reset();
    }
    else{
      console.log("form is not valid!");

      validateForm.validateAllFormFields(this.createMovieForm);       
    }
  }
}

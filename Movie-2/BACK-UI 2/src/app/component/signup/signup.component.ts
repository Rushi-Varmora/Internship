import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type:string = "password"
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash";

  signUpForm!:FormGroup;
  constructor(private fb: FormBuilder , private auth:AuthService){
  }

  ngOnInit(): void{ 
    this.signUpForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      userName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  hideshowpass(){
     this.isText = !this.isText;
     this.isText?this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
     this.isText?this.type = "text" : this.type = "password";  
  }

  onsignUp(){
    if(this.signUpForm.valid){
      //perform logic for signup
      console.log(this.signUpForm.value)    
      this.auth.signup(this.signUpForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message)
        })
        ,error:(err=>{
          alert(err?.error.message)
        })
      })

      this.signUpForm.reset();
    }
    else{
      console.log("form is not valid!");

      validateForm.validateAllFormFields(this.signUpForm);       
    }
  }


}

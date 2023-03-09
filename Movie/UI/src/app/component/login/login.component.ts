import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserStoreService } from 'src/app/services/user-store.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  
  
  type:string = "password"
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash";

  loginForm!:FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService ,private router: Router, private toast:NgToastService,private userStore:UserStoreService) { }
  
  ngOnInit(): void{
    this.loginForm= this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]

    })

  
  }

  hideshowpass(){
     this.isText = !this.isText;
     this.isText?this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
     this.isText?this.type = "text" : this.type = "password";  
  } 

  

  async onLogin(){
    if(this.loginForm.valid)
    {
     
     //send data to database     
     this.auth.login(this.loginForm.value)
     .subscribe({
      next:(res=>{
        console.log(res.message) ;  
        this.loginForm.reset();
        this.auth.storeToken(res.accessToken)
        this.auth.storeRefreshToken(res.refreshToken)
        this.toast.success({detail:"Success",summary:res.message,duration :5000}) ;
        const tokenPayload = this.auth.decodeToken();
        this.userStore.setFullNameForStore(tokenPayload.unique_name);
        this.userStore.setRoleForStore(tokenPayload.role);
        this.router.navigate(['landing']);
             
        
      }),
      error:(err=>{
        
        this.toast.error({detail:"ERROR",summary:"Something went wrong!",duration :5000}) ; 

      })
     })


    }
    else{
      console.log("form is not valid!");

      validateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid!") ; 
    }   
  }

}


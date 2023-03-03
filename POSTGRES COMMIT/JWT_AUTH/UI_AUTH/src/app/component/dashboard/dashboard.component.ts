import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent { 

public users:any=[];
public fullname : string = "";

constructor(  private auth:AuthService, private api: ApiService, private userStore: UserStoreService ){}
ngOnInit (){  

  this.userStore.getFullNameFromStore()
  .subscribe(val=>{
    let fullNameFromToken  = this.auth.getFullNamefromToken();
    this.fullname = val || fullNameFromToken;    
    this.fullname = this.fullname.charAt(0).toUpperCase() + this.fullname.substr(1).toLowerCase() ;
    console.log(this.fullname); 
  })
}

  logout(){
    this.auth.signOut();
  }
}

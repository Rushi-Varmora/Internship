import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public fullname : string = "";
  constructor(  private auth:AuthService, private api: ApiService, private userStore: UserStoreService ){}

  ngOnInit (){  

  this.userStore.getFullNameFromStore()
  .subscribe((val: any)=>{
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

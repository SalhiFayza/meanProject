import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {
dataResived:any
url:any
messageAuthError:any
  constructor(private authAdminS:AuthadminService, private route:Router, private arouter:ActivatedRoute) { 
if(this.authAdminS.isLoggedIn()==true){
  this.route.navigate(['/admin'])
}
  }

  ngOnInit(): void {
    // kn na ktbet /login bach ihezni lel login 
    //amam kn na ktbet /allstudents w jabli al page login insagel w ba3ed toul i7elei al page
    // mata3 allstudent  
this.url=this.arouter.snapshot.queryParams['returnUrl'] ||  '/admin/'
console.log(this.url)
  }
  
  loginAdmin(f:any){
  
    let data=f.value
    this.authAdminS.login(data).subscribe((response)=>
    
  {
    this.dataResived=response
    this.authAdminS.SaveDataProfil(
      this.dataResived.token)
      this.route.navigate([this.url])

  },err=>this.messageAuthError="Invalid email or password -_-"
    
    )
  }

}

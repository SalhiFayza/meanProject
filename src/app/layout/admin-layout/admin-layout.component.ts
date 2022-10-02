import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  userName:any
  constructor(private authAdminS:AuthadminService, private route:Router) { 
 //kn token moch mawjoud aslan raja3li lel page login
 //if(!localStorage.getItem('token')){
  //this.route.navigate(['/admin/login']) 
//}
  this.userName=this.authAdminS.getUserNameAdmin()
  //if(this.authAdminS.isLoggedIn()==true){
        //3ibara goutlou ki token mazal mawfach aba9a a5dem w dashboard ma7loula
       //console.log("welcome fayza, you are connected")
  //}else{
      //goutlou ki youfa a token arja3li lel login 
     //console.log("not connected")
    // this.route.navigate(['/admin/login'])
  //}
}

  ngOnInit(): void {
  }


  Logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {
 constructor(public authUserS:AuthuserService, private route:Router) { 
   
  }

  ngOnInit(): void {
  }
  Logout(){
localStorage.removeItem('token')
this.route.navigate(['/loginuser'])
  }

}

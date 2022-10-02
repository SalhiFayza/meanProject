import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  datatoken:any
  messageError:any
  constructor(private route:Router,private authUserS:AuthuserService) { }

  ngOnInit(): void {
  }

  login(f:any){
    let data=f.value
    this.authUserS.login(data).subscribe(data=>{
    //console.log(data)

this.datatoken=data
this.authUserS.saveToken(this.datatoken.token)
this.route.navigate(['/students'])
    },(err:HttpErrorResponse)=>{this.messageError=' -_- '+ err.error.Error}
    )
  }
}

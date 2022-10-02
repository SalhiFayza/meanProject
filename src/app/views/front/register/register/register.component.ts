import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messageError:any
  constructor(private authUserS:AuthuserService,private route:Router) { }

  ngOnInit(): void {
  }

  register(f:any){
    let data=f.value

    this.authUserS.register(data).subscribe(data=>{
    
        this.route.navigate(['/loginuser'])
      
    
    },(err:HttpErrorResponse)=>{
            this.messageError=" -_- "+err.error.Error})

  }

}

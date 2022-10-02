import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
profilAdmin={
  userName:'',
  role:''
}


helper = new JwtHelperService()
  constructor(private http:HttpClient) { }

  login(dataadmin:any){
    return this.http.post('http://localhost:3306/admin/login',dataadmin)
  }
  SaveDataProfil(token:any){

    localStorage.setItem('token',token)

  }



  getUserNameAdmin(){
    let token:any=localStorage.getItem('token')
    let decodeToken =  this.helper.decodeToken(token)
    return decodeToken.userName
  }


  isLoggedIn(){
    let token:any=localStorage.getItem('token')
//kn token moch mawjoud aslan raja3li lel page login
    if(!token){
        return false
    }
    let decodeToken = this.helper.decodeToken(token)
    let role = decodeToken.role
  
    if(role!=='Admin'){
      return false
    }
    if(this.helper.isTokenExpired(token)){
      return false

    }
    return true
  }
}

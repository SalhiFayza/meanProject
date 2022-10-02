import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../services/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class GarduserGuard implements CanActivateChild {
  constructor(private authUserS:AuthuserService, private route:Router){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve,reject)=>{
        if(this.authUserS.userLoggedIn()==true){
          resolve(true)
        }else{
  
      this.route.navigate(['/loginuser'],{queryParams:{returnUrl:state.url}})
      localStorage.removeItem('token')
      resolve(false)
        }
      })
  }
  
}

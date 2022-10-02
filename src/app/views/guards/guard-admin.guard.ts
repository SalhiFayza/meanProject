import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  constructor(private authAdminS:AuthadminService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //if(this.authAdminS.isLoggedIn()==true){
     //return true
    //}else{
     // return false
    //}
    return new Promise((resolve,reject)=>{
      if(this.authAdminS.isLoggedIn()==true){
        resolve(true)
      }else{

    this.route.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
    localStorage.removeItem('token')
    resolve(false)
      }
    })
  }
  
}

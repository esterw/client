import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private router: Router, private auth: AuthService) { }
 
  canActivate() {
   return true;
 
    //if (localStorage.getItem('auth') != null) {
    //        // logged in so return true
 
    //        return true;
    //    }
 
    //    // not logged in so redirect to login page
    //    this.router.navigate(['/Homepage']);
    //    return false;
    }
}

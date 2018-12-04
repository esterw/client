import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../shared/services/affiliate-service/affiliate.service';
import { AuthenticationService } from '../../../shared/services/Authentication/Authentication.service';
import { AlertService } from '../../../shared/services/Authentication/alert.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { AuthService } from '../../../../services/auth.service';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Component({
  selector: 'app-login-affiliate-modal',
  templateUrl: './login-affiliate-modal.component.html',
  styleUrls: ['./login-affiliate-modal.component.css']
})
export class LoginAffiliateModalComponent implements OnInit {

  constructor(private affiliateService: RegisterService, private authenticationService: AuthenticationService, private authService : AuthService,
    private alertService: AlertService, private router: Router, private http: HttpClient,public bsModalRef: BsModalRef) { }
    model: any = {};
    loading = false;
    message:string="";
  ngOnInit() {
  }
  login(username:HTMLInputElement,password:HTMLInputElement) {
  
    //console.log("from login",username.innerHTML,"password.value", password.value,"password.innerText", password.innerText);
    this.loading = true;
    var data = {
      username: username,
      password: password,

    };

   // console.log("username: " + username.value + "password: " + password.value);
    this.http.post<TokenResponse>("/api/Token/GetToken", { username: username.value, password: password.value })
      .map((res) => {
        let token = res && res.token;
        // if the token is there, login has been successful
        if (token) {
          // store username and jwt token
          this.authService.setAuth(res);
        //  console.log(localStorage.getItem('auth'));
          this.loading = false;
          this.bsModalRef.hide();
          this.router.navigate(['/Login']);
          // successful login
          return true;
        }
        // failed login
      //  return Observable.throw('Unauthorized');
        this.loading = false;
        this.message = "username or password are not correct or server isn't available";
        return Observable.throw('Unauthorized');
      })
      .catch(error => {
      //  console.log("Failed");
        this.loading = false;
        this.message = "username or password are not correct or server isn't available";
        return new Observable<any>(error);
      }).subscribe();


    //if (this.authService.login(username.value, password.value).subscribe()) {
    //  console.log(localStorage.getItem('auth'));
    //  this.loading = false;
    //  this.bsModalRef.hide();
    //  this.router.navigate(['/Login']);
    //}
    //else {
    ////  this.alertService.error(error);
    //  console.log("Failed");
    //  this.loading = false;
    //  this.message = "username or password are not correct or server isn't available";
     
    //}
  
    

  }
}

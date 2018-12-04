import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  affiliateLogin(username: string, password: string) {
       var body = new HttpParams()
         .set('username', username)
          .set('password', password);

    return this.http.post('/api/Token/GetToken', body)
           .map(
               response => { 
                   const affiliateID = response ;
                   if (affiliateID) {
                    //   localStorage.setItem('user' , JSON.stringify(affiliateID.token)) ;
                   // console.log("affiliateID",response );
                   }
                   return affiliateID;
               }
           )}
 
}

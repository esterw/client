import { EventEmitter, Inject, Injectable, PLATFORM_ID } from
  "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';
//p413
@Injectable()
export class AuthService {
  authKey: string = "auth";
  clientId: string = "TestMakerFree";
  constructor(private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any) {
  }

  // performs the login
  login(username: string, password: string): Observable<boolean> {
    var url = "/api/Token/GetToken";
    var data = {
      username: username,
      password: password,

    };



    return this.http.post<TokenResponse>(url, data)
      .map((res) => {
        let token = res && res.token;
        // if the token is there, login has been successful
        if (token) {
          // store username and jwt token
          this.setAuth(res);
          // successful login
          return true;
        }
        // failed login
        return Observable.throw('Unauthorized');
      })
      .catch(error => {
         
        return new Observable<any>(error);
      });
  }
  // performs the logout
  logout(): boolean {
    this.setAuth(null);
    return true;
  }
  // Persist auth into localStorage or removes it if a NULL argument is given
  setAuth(auth: TokenResponse | null): boolean {
    if (isPlatformBrowser(this.platformId)) {
  
      if (auth) {
        localStorage.setItem(
          this.authKey,
          JSON.stringify(auth));
      }
      else {
        //console.log('key removed' );
        localStorage.removeItem(this.authKey);
      }
    }
    return true;
  }

  getAuth(): TokenResponse | null {
    if (isPlatformBrowser(this.platformId)) {
      var i = localStorage.getItem(this.authKey);
      if (i) {
        return JSON.parse(i);
      }
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.authKey) != null;
    }
    return false;
  }


}

   

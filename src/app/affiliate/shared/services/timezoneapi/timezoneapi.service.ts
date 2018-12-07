
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Console } from '@angular/core/src/console';
import { Subject } from "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Timezone } from './timezoneapi.model';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";


@Injectable()
export class TimezoneService {
  constructor(private http: HttpClient) { }
 url: string = "https://timezoneapi.io/api/ip/?token=bVNLWRzikIvs";
 timezone: Timezone = new Timezone();
 timezoneChanged = new Subject<Timezone>();


 get() {
    //console.log("timeZoneApi------------");
    return this.http.get(this.url)
        .map(
        (response: Response) => {
          const data: any = response;//response.json();
            return data;
        }
        )
        .subscribe(
      ((data: any) => {
            this.setTimezone(data)
            ////console.log("Time zone Service----------------"+JSON.stringify(data.datetime.time));
        })
        )
}
        setTimezone(timezone:Timezone) {
            this.timezone = timezone;
            this.timezoneChanged.next(this.timezone);
        }
        
        getObservable(): Observable<any> {
            return this.timezoneChanged.asObservable();
        }
// Require

// Request
 /* request(urlUsersAdditional, function(err, res, dat){

     Parse
    var data = JSON.parse(dat);

     Request OK?
    if(data.meta.code == '200'){

         Log
        console.log(data);

         Example: Get the city parameter
        var city = data.data.city;

         Example: Get the users time
        var time = data.data.datetime.date_time_txt;

    }

});






  users: userAdditional;
    newUser: userAdditional;
    currentUserAdditional: userAdditional =new userAdditional();;
    usesAdditionalDatas: userAdditional[] = new Array<userAdditional>();
    currentUserAdditionalChanged = new Subject<userAdditional>();
    showSlider:Boolean = true;

    getUsersAdditionalDatas() {
        console.log("timeZoneApi------------");
        return this.http.get(this.urlUsersAdditional)
            .map(
            (response: Response) => {
                const users: userAdditional[] = response.json();
                console.log("success");
                console.log(users);
                return users;
            }
            )
            .subscribe(
            ((users: userAdditional[]) => {
                console.log(users);
            })
            )
    }*/



}

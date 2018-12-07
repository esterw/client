import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { MyData, base, user } from './affiliateDivide.model';
import { Affiliate } from '../../../../shared/affiliate-server/affiliate.model';
import * as JWT from 'jwt-decode';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }
    base: base; user: user;
    myData: MyData;
  
  addAffiliate(newAffiliate: AffiliateViewModel) {
        //this.base = new base();
        //this.user = new user();
        /* this.base = {
              "CompanyName":newAffiliate.CompanyName,
              "Phone":newAffiliate.Phone,
              "Address1":newAffiliate.Address1,
              "Address2":newAffiliate.Address2,
              "City":newAffiliate.City,
              "Country":newAffiliate.Country,
              "State":newAffiliate.State,
              "ZipCode":newAffiliate.ZipCode,
              "Email":newAffiliate.Email
          };*/
        //this.base.CompanyName = newAffiliate.CompanyName;
        //this.base.Phone = newAffiliate.Phone;
        //this.base.Address1 = newAffiliate.Address1;
        //this.base.Address2 = newAffiliate.Address2;
        //this.base.City = newAffiliate.City;
        //this.base.Country = newAffiliate.Country;
        //this.base.State = newAffiliate.State;
        //this.base.ZipCode = newAffiliate.ZipCode;
        //this.base.Email = newAffiliate.Email;
        //this.base.Password = newAffiliate.Password,

            //this.user = {
            //    "Username": newAffiliate.Username,
            //    "Name": newAffiliate.Name,
            //    "Family": newAffiliate.Family,
            //    "Tile": newAffiliate.Tile,
            //    "RegistrationDate": newAffiliate.RegistrationDate,
            //    "Skype":newAffiliate.Skype,
            //};
        //myData= new myData();
        //this.myData = new MyData();
        //this.myData.base = this.base;
        //this.myData.user = this.user;
        //let currentDate = new Date();

        let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });//, options
        //console.log("New Affiliate Data Before Sending-----" + JSON.stringify(this.myData))
    return this.http.post('/api/Affiliates/PostAffiliateAsync', newAffiliate)
            .map(
                (response: Response) => {
                    const responseJson = response.json();
                   // console.log("res=====>",responseJson);
                  //  localStorage.setItem("user", responseJson.token);
                    return responseJson;
                })
    }

    updateAffiliate(newAffiliate:Affiliate)
    {
        //this.base = new base();
        //this.user = new user();
        
        const base = {
                "ID":newAffiliate.ID,
              "CompanyName":newAffiliate.CompanyName,
              "Phone":newAffiliate.Phone,
              "Address1":newAffiliate.Address1,
              "Address2":newAffiliate.Address2,
              "City":newAffiliate.City,
              "Country":newAffiliate.Country,
              "State":newAffiliate.State,
              "ZipCode":newAffiliate.ZipCode,
              "Email":newAffiliate.Email,
              "Password":newAffiliate.Password,
              "Balance":newAffiliate.Balance,

          };

            const user = {
                "ID":newAffiliate.AffiliateUserID,
                "Username": newAffiliate.Username,
                "Name": newAffiliate.Name,
                "Family": newAffiliate.Family,
                "Tile": newAffiliate.Tile,
                "RegistrationDate": newAffiliate.RegistrationDate,
                "Skype":newAffiliate.Skype,
            };
        this.myData = new MyData();
        this.myData.base = base;
        this.myData.user = user;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //console.log("New Affiliate Data Before Sending-----" + JSON.stringify(this.myData))
      //, options
        return this.http.post('/api/Affiliates/PutAffiliate?id='+newAffiliate.ID, this.myData)
        .map(
            (response: Response) => {
              const responseJson = response;// response.json();
                //console.log(responseJson);
                return responseJson;
            })

    }
}

import { Injectable } from '@angular/core';
import { Affiliate, AffiliateAccount, AffiliateBanner, AffiliateMedia, AffiliatePixel, AffiliateWithdrawlHistory, AffiliateTicket, AffiliateSummaryPerSite, AffiliateCommission, AffiliateRevenueReport, SubAffiliates, AffilateRequestWithdraw, AffiliateTicketContent, AffiliateBankAccount } from '../affiliate-server/affiliate.model';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as moment from 'moment'

@Injectable()
export class AffiliateService {

    closeModal: Subject<boolean> = new Subject();
    closeTicketModal: Subject<boolean> = new Subject();
    closeWithdrModal: Subject<boolean> = new Subject();

    affiliate: Affiliate = new Affiliate;
    affiliateChanged = new Subject<Affiliate>();

    url: string = environment.apiUrl;

    constructor(private http: HttpClient) { }
    
    getAffiliateByID() {

       const affiliateID = localStorage.getItem('userID');

        this.http.get(this.url + "/api/Affiliates/" + affiliateID).pipe(map(
            (response: Affiliate) => {
                const affiliate: any = response;
                return affiliate;
            }))
            .subscribe(
                ((affiliate: Affiliate) => {
                    this.setAffiliate(affiliate);
                })
            )
    }
    
    updateAccount(affiliateAccount: AffiliateBankAccount): any {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.post(this.url + "/api/AffiliateBankAccounts" , affiliateAccount);
    }

    loginAffiliate(username: string, password: string): any {
      return  this.http.get(this.url + "/api/Affiliates?email=" + username + '&password=' + password).pipe(map(
            (response: Affiliate) => {
                const affiliate: any = response;
                    this.setAffiliate(affiliate);
                return affiliate;
            }));
    }

    setAffiliate(affiliate) {
        this.affiliate = affiliate;
        this.affiliateChanged.next(this.affiliate);
    }

    newAffiliate(newAffiliate: Affiliate) {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.post(this.url + "/api/Affiliates", newAffiliate);
    }
    
    updateAffiliate(affiliate: Affiliate): any {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: httpHeaders
        };
        
        for (const key in affiliate) {
            if (affiliate[key] instanceof Object && key!= 'AffiliateBankAccount') {
                const element = affiliate[key];
                delete affiliate[key];
            }
        }
        return this.http.put(this.url + "/api/Affiliates/" + affiliate.ID, affiliate);
    }

    addMessage(newMessage: AffiliateTicketContent, ticketID: number) {

        newMessage.CreatedBy = this.affiliate.Name + " " + this.affiliate.Family;
        newMessage.TicketID = ticketID;
        newMessage.CreatedDate = moment(new Date()).toDate();

        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = {
            headers: httpHeaders
        };
        return this.http.post(environment.apiUrl + '/api/AffiliateTicketContents', newMessage, options)
    }

    requestWithdrawl(amountValue) {
        let newRequest: AffilateRequestWithdraw = new AffilateRequestWithdraw();
        newRequest.RequestDate = moment(new Date()).toDate();
        newRequest.AffiliateID = this.affiliate.ID;
        newRequest.Amount = amountValue;
        newRequest.Status = "Pending";
        newRequest.RejectedDetails = "Pending";
        newRequest.BalanceAfterPayout = 120;

        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = {
            headers: httpHeaders
        };

        return this.http.post(environment.apiUrl + '/api/AffilateRequestWithdraws', newRequest)
            .map(
                (response: Response) => {
                    // if (response) {
                    //     console.log(response, "is string");
                    // }
                    // else {
                    //     const responseJson = response;
                    //     let returendWithdraw: any = responseJson; // AffilateRequestWithdraw = responseJson;
                    //     this.WithdrawlHistory.push(returendWithdraw);
                    //     this.WithdrawlHistoryChanged.next(this.WithdrawlHistory);

                    // }
                    return response;
                })
    }

    newTicket(Subject) {

        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = {
            headers: httpHeaders
        };

        let obj = new AffiliateTicket()
        
           obj.Subject = Subject;
           obj.IsReadByAffiliate = true;
           obj.AffiliateID =  this.affiliate.ID;
           obj.CreatedDate =  moment(new Date()).toDate();
           obj.Status = "open";
           obj.CreatedBy = this.affiliate.Name + ' ' + this.affiliate.Family;

        return this.http.post(environment.apiUrl + '/api/AffiliateTickets', obj)
    }

    updateTicketIsRead(ticket: AffiliateTicket, ticketID: number) {

        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
        });
        let options = {
            headers: httpHeaders
        };

        ticket.IsReadByAffiliate = true;

        return this.http.put(environment.apiUrl + '/api/AffiliateTickets/' +ticketID, ticket)
    }


    addAffiliate(newAffiliate: any) {
        // this.base = new base();
        // this.user = new User();
        // /* this.base = {
        //       "CompanyName":newAffiliate.CompanyName,
        //       "Phone":newAffiliate.Phone,
        //       "Address1":newAffiliate.Address1,
        //       "Address2":newAffiliate.Address2,
        //       "City":newAffiliate.City,
        //       "Country":newAffiliate.Country,
        //       "State":newAffiliate.State,
        //       "ZipCode":newAffiliate.ZipCode,
        //       "Email":newAffiliate.Email
        //   };*/
        // this.base.CompanyName = newAffiliate.CompanyName;
        // this.base.Phone = newAffiliate.Phone;
        // this.base.Address1 = newAffiliate.Address1;
        // this.base.Address2 = newAffiliate.Address2;
        // this.base.City = newAffiliate.City;
        // this.base.Country = newAffiliate.Country;
        // this.base.State = newAffiliate.State;
        // this.base.ZipCode = newAffiliate.ZipCode;
        // this.base.Email = newAffiliate.Email;

        // this.user = new User();
        // this.user.Username = newAffiliate.Username;
        // this.user.Password = newAffiliate.Password;
        // this.user.Name = newAffiliate.Name;
        // this.user.Family = newAffiliate.Family;
        // this.user.Tile = newAffiliate.Tile;
        // this.user.RegistrationDate = newAffiliate.RegistrationDate;

        // //myData= new myData();
        // this.myData = new MyData();
        // this.myData.base = this.base;
        // this.myData.User = this.user;
        // let currentDate = moment(new Date()).toDate();
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });//, options
        // //console.log("New Affiliate Before Sending-----" + JSON.stringify(newAffiliate))

        // return this.http.post(environment.apiUrl + '/api/Affiliates/PostAffiliate', this.myData)
        //     .map(
        //         (response: Response) => {
        //             const affiliate: any = response;//.json();
        //             //this.iliate = affiliate;
        //             return affiliate;
        //         })
        //     .subscribe(
        //         ((affiliate: any) => {
        //             //console.log("affiliate************:" + affiliate);
        //             // this.setiliate(user);
        //         }))
    }
}

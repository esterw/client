import { Injectable } from '@angular/core';
import { Affiliate, AffiliateAccount, AffiliateBanner, AffiliateMedia, AffiliatePixel, AffiliateWithdrawlHistory, AffiliateTicket, AffiliateSummaryPerSite, AffiliateCommission, AffiliateRevenueReport, SubAffiliates, AffilateRequestWithdraw, AffiliateTicketContent } from './affiliate.model';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';

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
        return this.http.put(this.url + "/api/Affiliates/" + affiliate.ID, affiliate);
    }

    addMessage(newMessage: AffiliateTicketContent, ticketID: number) {
        
        newMessage.CreatedBy = this.affiliate.Name + " " + this.affiliate.Family;
        
newMessage.TicketID = ticketID;
// newMessage.IsActivateOnCreation = false;
// newMessage.IsPopupUntilApproval = false;
//  newMessage.IsReadByAffiliate = true;
//  newMessage.IsSendByEmail = false;
//  newMessage.ID = null;
newMessage.CreatedDate = new Date();

        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            'Cache-Control': 'no-cache'
       });
       let options = {
        headers: httpHeaders
         }; 
        return this.http.post(environment.apiUrl + '/api/AffiliateTicketContents', newMessage, options)
            // .map(
            //     (response: Response) => {
            //         const responseJson: any = response;//MessagesContents = response;//response.json().Message;
            //         let t: AffiliateTicket; let mc: MessagesContents;
            //         let re = this.Ticket.find(ticket => ticket.ID == ticketID).MessagesContents.push(responseJson);
            //         //console.log("res=========>",this.Ticket)
            //         this.TicketChanged.next(this.Ticket);
            //         //console.log(responseJson);
            //         return responseJson;
            //     })
    }

    requestWithdrawl(amountValue) {
        // let newRequest: AffilateRequestWithdraw = new AffilateRequestWithdraw();
        // newRequest.RequestDate = new Date();
        // newRequest.AffiliateID = this.Affiliate.ID;
        // newRequest.Amount = amountValue;
        // newRequest.Status = "Pending";

        // //console.log("newRequest before sending===>",newRequest)
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });//, options
        // return this.http.post(environment.apiUrl + '/api/AffiliateRequestWithdrawls/PostAffiliateRequestWithdrawl', newRequest)
        //     .map(
        //         (response: Response) => {
        //             if (response) {
        //                 console.log(response, "is string");
        //             }
        //             else {
        //                 const responseJson = response;
        //                 let returendWithdraw: any = responseJson; // AffilateRequestWithdraw = responseJson;
        //                 this.WithdrawlHistory.push(returendWithdraw);
        //                 this.WithdrawlHistoryChanged.next(this.WithdrawlHistory);

        //             }
        //             return response;
        //         })
    }

    newTicket(Subject, Content) {

        // let newTicket: AffiliateNewTicket = new AffiliateNewTicket();
        // let ticket: Ticket = new Ticket();
        // let Message: Messages = new Messages()
        // ticket.CreatedDate = new Date();
        // ticket.Subject = Subject;
        // ticket.CreatedBy = this.Affiliate.Name + " " + this.Affiliate.Family;
        // ticket.Status = "Open";
        // ticket.AffiliateID = this.Affiliate.ID;
        // ticket.IsReadByAffiliate = true;
        // Message.CreatedDate = new Date();
        // Message.CreatedBy = this.Affiliate.Name + " " + this.Affiliate.Family;

        // Message.Content = Content;
        // Message.Subject = Subject;
        // newTicket.Ticket = ticket;
        // newTicket.Message = Message;
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });//, options
        // return this.http.post(environment.apiUrl + '/api/AffiliateTickets/PostAffiliateTicket', newTicket)
        //     .map(
        //         (response: Response) => {
        //             const responseJson = response;//response.json();
        //             let returendTicket: AffiliateTicket = responseJson[0][0];
        //             this.Ticket.push(returendTicket);
        //             this.TicketChanged.next(this.Ticket);
        //             return responseJson;
        //         })
    }

    updateTicketIsRead(ticketID) {

        // this.http.get(environment.apiUrl + '/api/AffiliateTickets/GetAffiliateTicket?id=' + ticketID)
        //     .map((response: Response) => {
        //         const fullAffiliate: any = response;///response.json();
        //         return fullAffiliate;
        //     })
        //     .subscribe(
        //         ((affiliate: any) => {
        //             let c = this.Ticket.filter(x => x.ID == ticketID)[0].IsReadByAffiliate = true;
        //             this.TicketChanged.next(this.Ticket)
        //         })
        //     )
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
        // let currentDate = new Date();
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

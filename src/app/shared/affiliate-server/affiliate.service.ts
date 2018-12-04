import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Affiliate, base, user, MyData, AffiliateAccount, AffiliateBanner, AffiliateMedia, AffiliatePixel, AffiliateWithdrawlHistory, AffiliateTicket, AffiliateSummaryPerSite, AffiliateCommission, AffiliateRevenueReport, SubAffiliates, MessagesContents, AffilateRequestWithdraw, AffiliateNewTicket, Ticket, Messages } from './affiliate.model';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class AffiliateService {
    closeModal: Subject<boolean> = new Subject();
    closeTicketModal: Subject<boolean> = new Subject();
    closeWithdrModal: Subject<boolean> = new Subject();
    Affiliate: Affiliate = new Affiliate();
    WithdrawlHistory: AffilateRequestWithdraw[];
    Ticket: AffiliateTicket[];
    SummaryPerSite: AffiliateSummaryPerSite[];
    Commission: AffiliateCommission[];
    RevenueReport: AffiliateRevenueReport[];
    Pixel: AffiliatePixel;
    Media: AffiliateMedia;
    Banner: AffiliateBanner[];
    Account: AffiliateAccount[];
    SubAffiliates: SubAffiliates[];

    AffiliateChanged = new Subject<Affiliate>();
    WithdrawlHistoryChanged = new Subject<AffilateRequestWithdraw[]>();
    TicketChanged = new Subject<AffiliateTicket[]>();
    SummaryPerSiteChanged = new Subject<AffiliateSummaryPerSite[]>();
    CommissionChanged = new Subject<AffiliateCommission[]>();
    RevenueReportChanged = new Subject<AffiliateRevenueReport[]>();
    PixelChanged = new Subject<AffiliatePixel>();
    MediaChanged = new Subject<AffiliateMedia>();
    BannerChanged = new Subject<AffiliateBanner[]>();
    AccountChanged = new Subject<AffiliateAccount[]>();
    SubAffiliatesChanged = new Subject<SubAffiliates[]>();
  constructor(private http: HttpClient) { }
    Url: string = "http://affiliatesserver.azurewebsites.net/api/Affiliates";
    base: base; user: user;
    myData: MyData;

    //environment.apiUrl  + 
    getAffiliateByID() {
    //console.log( "api/Affiliates/GetAffiliate?id=" + id);
        this.http.get("/api/Affiliates/GetAffiliate")
            .map((response: Response) => {
                // console.log("response:--------" + JSON.stringify(response.json()))
              //console.log(response);
              //console.log(response['List']);
              const fullAffiliate: any = response['List'];//.json().List;
                  //console.log("fullAffiliate==>",fullAffiliate[0][0])
                return fullAffiliate;
            })
            .subscribe(
                ((affiliate: any) => {
                    this.setAffiliate(affiliate);
                    ////console.log(affiliate, "from get by id------------------------",JSON.stringify(affiliate) );
                })
            )
    }

  setAffiliate(fullAffiliate) {
   // console.log(fullAffiliate[0]['AffModel'][0]);
    this.Affiliate = fullAffiliate[0]['AffModel'][0];
        this.AffiliateChanged.next(this.Affiliate);
      // console.log("this.Affiliate",this.Affiliate)
    this.Account = fullAffiliate[0]['AffAccount'];
    this.Banner = fullAffiliate[0]['AffBannerSize'];
    this.Media = fullAffiliate[0]['AffMedia'];
    this.Pixel = fullAffiliate[0]['AffPixel'];
    this.Commission = fullAffiliate[0]['AffCommissions'];
    this.RevenueReport = fullAffiliate[0]['AffRevenueReport'];
    this.SummaryPerSite = fullAffiliate[0]['AffBanners'];
    this.Ticket = fullAffiliate[0]['AffTicket'];
    this.WithdrawlHistory = fullAffiliate[0]['AffRequestWithdrawls'];
    this.SubAffiliates = fullAffiliate[0]['SubAff'];
        this.WithdrawlHistoryChanged.next(this.WithdrawlHistory);
        this.TicketChanged.next(this.Ticket);
        this.SummaryPerSiteChanged.next(this.SummaryPerSite);
        this.CommissionChanged.next(this.Commission);
        this.RevenueReportChanged.next(this.RevenueReport);
        this.PixelChanged.next(this.Pixel);
        this.MediaChanged.next(this.Media);
        this.BannerChanged.next(this.Banner);
        this.AccountChanged.next(this.Account);
        this.SubAffiliatesChanged.next(this.SubAffiliates);

    }

    addMessage(newMessage: MessagesContents, ticketID: number) {
        newMessage.CreatedBy=this.Affiliate.Name+" "+this.Affiliate.Family;
        let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });//, options
        return this.http.post('/api/AffiliateTicketContents/PutAffilissate?id=' + ticketID, newMessage)
            .map(
                (response: Response) => { 
                  const responseJson: any = response;//MessagesContents = response;//response.json().Message;
                    let t: AffiliateTicket; let mc: MessagesContents;
                  let re=  this.Ticket.find(ticket => ticket.Id == ticketID).MessagesContents.push(responseJson);
                  //console.log("res=========>",this.Ticket)
                    this.TicketChanged.next(this.Ticket);
                    //console.log(responseJson);
                    return responseJson;
                })
    }

    requestWithdrawl(amountValue) {
        let newRequest: AffilateRequestWithdraw = new AffilateRequestWithdraw();
        newRequest.RequestDate = new Date();
        newRequest.AffiliateID = this.Affiliate.Id;
        newRequest.Amount = amountValue;
        newRequest.Status = "Pending";

        //console.log("newRequest before sending===>",newRequest)
        let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });//, options
        return this.http.post('/api/AffiliateRequestWithdrawls/PostAffiliateRequestWithdrawl', newRequest)
            .map(
                (response: Response) => {
                    if(response){
                        console.log(response,"is string");
                    }
                    else{
                      const responseJson = response;//.json();
                      let returendWithdraw:any=  responseJson; // AffilateRequestWithdraw = responseJson;
                    this.WithdrawlHistory.push(returendWithdraw);
                    this.WithdrawlHistoryChanged.next(this.WithdrawlHistory);
                        
                    }
                    //console.log(responseJson);
                  return response;//.json();
                })
    }

    newTicket(Subject, Content) {
       
        let newTicket: AffiliateNewTicket = new AffiliateNewTicket();
        let ticket: Ticket = new Ticket();
        let Message: Messages = new Messages()
        ticket.CreatedDate = new Date();
        ticket.Subject = Subject;
        ticket.CreatedBy =this.Affiliate.Name+" "+this.Affiliate.Family;
        ticket.Status = "Open";
        ticket.AffiliateID = this.Affiliate.Id;
        ticket.IsReadByAffiliate = true;
        Message.CreatedDate = new Date();
        Message.CreatedBy =  this.Affiliate.Name+" "+this.Affiliate.Family;

        Message.Content = Content;
        Message.Subject = Subject;
        newTicket.Ticket = ticket;
        newTicket.Message = Message;
        let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });//, options
        return this.http.post('/api/AffiliateTickets/PostAffiliateTicket', newTicket)
            .map(
                (response: Response) => {
                  const responseJson = response;//response.json();
                    let returendTicket: AffiliateTicket = responseJson[0][0];
                    this.Ticket.push(returendTicket);
                    this.TicketChanged.next(this.Ticket);
                 //  console.log(this.Ticket);
                    return responseJson;
                })
    }

 updateTicketIsRead(ticketID){
        
  //console.log(ticketID,"==ticketID")
        this.http.get('/api/AffiliateTickets/GetAffiliateTicket?id=' +  ticketID)
            .map((response: Response) => {
             // console.log("response:--------" + JSON.stringify(response.json()))
              const fullAffiliate: any = response;///response.json();
                return fullAffiliate;
            })
            .subscribe(
          ((affiliate: any) => {
             // console.log('Ticket Value');
           //   console.log(this.Ticket);
                   let c= this.Ticket.filter(x=> x.Id==ticketID)[0].IsReadByAffiliate=true;
                   //console.log(c)
                    this.TicketChanged.next(this.Ticket)
                })
            )
   

    }






















    addAffiliate(newAffiliate: any) {
        this.base = new base();
        this.user = new user();
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
        this.base.CompanyName = newAffiliate.CompanyName;
        this.base.Phone = newAffiliate.Phone;
        this.base.Address1 = newAffiliate.Address1;
        this.base.Address2 = newAffiliate.Address2;
        this.base.City = newAffiliate.City;
        this.base.Country = newAffiliate.Country;
        this.base.State = newAffiliate.State;
        this.base.ZipCode = newAffiliate.ZipCode;
        this.base.Email = newAffiliate.Email;

        this.user = {
            "Username": newAffiliate.Username,
            "Password": newAffiliate.Password,
            "Name": newAffiliate.Name,
            "Family": newAffiliate.Family,
            "Tile": newAffiliate.Tile,
            "RegistrationDate": newAffiliate.RegistrationDate
        };
        //myData= new myData();
        this.myData = new MyData();
        this.myData.base = this.base;
        this.myData.user = this.user;
        let currentDate = new Date();
        let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });//, options
        //console.log("New Affiliate Before Sending-----" + JSON.stringify(newAffiliate))

        return this.http.post('/api/Affiliates/PostAffiliate', this.myData)
            .map(
                (response: Response) => {
                  const affiliate: any = response;//.json();
                    //this.iliate = affiliate;
                    return affiliate;
                })
            .subscribe(
          ((affiliate: any) => {
                    //console.log("affiliate************:" + affiliate);
                    // this.setiliate(user);
                }))
    }
}

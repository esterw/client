import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { FAQ } from "./FAQs.model";
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class FAQsService {
  constructor(private http: HttpClient) { }

urlContents="/api/ComFAQs/get"
contentsFAQ: FAQ[] = new Array<FAQ>();
contentsChanged = new Subject<FAQ[]>();
    getContentsFAQ() {
        // //console.log("getContentPage");
        return this.http.get(this.urlContents)
            .map(
            (response: Response) => {
               
              this.setContents(response);
              return response;
            }).subscribe(
            ((contentsFAQ: any) => {
            //  console.log("after mapping FAQ--------------"+JSON.stringify(this.contentsFAQ));
            })
            )
    }
    getObservableFAQ(): Observable<any> 
    {
         return this.contentsChanged.asObservable();
    }
  setContents(banners: any) {
        this.contentsFAQ = banners;
        this.contentsChanged.next(this.contentsFAQ);
    }
}

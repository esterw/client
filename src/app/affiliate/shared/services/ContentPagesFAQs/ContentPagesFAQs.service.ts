import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { ContentPagesFAQ } from "./ContentPagesFAQs.model";
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";





@Injectable()
export class ContentPagesFAQService {
  constructor(private http: HttpClient) { }

urlcontentsFAQs="/api/ComContentFAQs/get"
contentsFAQs: ContentPagesFAQ[] = new Array<ContentPagesFAQ>();
contentsFAQsChanged = new Subject<ContentPagesFAQ[]>();
    
getcontentsFAQs() {
        return this.http.get(this.urlcontentsFAQs)
            .map(
            (response: Response) => {
                const contentsFAQs: any = response;
               this.setcontentsFAQs(contentsFAQs);
                return contentsFAQs;
            }
            )
            .subscribe(
            ((contentsFAQs: ContentPagesFAQ[]) => {
           //   console.log("after mapping ContentPagesFAQ--------------"+JSON.stringify(this.contentsFAQs) );
            })
            )
    }
    getObservablefAQS(): Observable<any> 
    {
         return this.contentsFAQsChanged.asObservable();
    }
  setcontentsFAQs(banners: any) {
        this.contentsFAQs = banners;
        this.contentsFAQsChanged.next(this.contentsFAQs);
    }
    contentsFAQsByGroup
    getcontentsFAQsUpdated() {
        return this.contentsFAQs.slice();
    }
    getcontentsFAQsByGroup(groupName:string) {
        this.contentsFAQsByGroup=this.contentsFAQs.filter(content=>{return content.Group == groupName});
        // //console.log("casinobanners-----"+this.contentsFAQsByGroup)  ;
        return this.contentsFAQsByGroup.slice();
    }
}

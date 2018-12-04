import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import {  Content } from "./ContentPages.model";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";





@Injectable()
export class ContentPagesService {
  constructor(private http: HttpClient) { }

urlContents="http://play24bet.com/api/ComPageContents/GetAll"
contents: Content[] = new Array<Content>();
contentsChanged = new Subject<Content[]>();
    getContents() {
        // //console.log("getContentPage");
        return this.http.get(this.urlContents)
            .map(
            (response: Response) => {
                const contents: any = response;
               this.setContents(contents);
                // //console.log("From Contents Service"+contents)
                return contents;
            }
            )
            .subscribe(
            ((contents: any) => {
                // //console.log("after mapping Content--------------"+this.contents);
            })
            )
    }
    getObservableBanners(): Observable<any> 
    {
         return this.contentsChanged.asObservable();
    }
    setContents(banners: any) {
        this.contents = banners;
        this.contentsChanged.next(this.contents);
    }
    contentsByGroup
    getContentsUpdated() {
        return this.contents.slice();
    }
    getContentsByGroup(groupName:string) {
        this.contentsByGroup=this.contents.filter(content=>{return content.Group == groupName});
        // //console.log("casinobanners-----"+JSON.stringify(this.contentsByGroup) ) ;
        return this.contentsByGroup.slice();
    }
}

import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Banner } from "./banners.model";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class BannersService {
  constructor(private http: HttpClient) { }

urlBanners="/api/bannersses/getBannersses"




banners: Banner[] = new Array<Banner>();
bannersChanged = new Subject<Banner[]>();


    getBanners() {
        // //console.log("getBanners");
        return this.http.get(this.urlBanners)
            .map(
            (response: Response) => {
            
              this.setBanners(response)
                //return this.banners.slice();
                // //console.log("From Banners Service"+banners)
              return response;
            }
            )
         .subscribe(
            ((banners: any) =>{
                //this.banners = banners;
                this.setBanners(banners);
                // //console.log("after mapping banners--------------" + this.banners);
            })
            )
    }

  setBanners(banners: any) {
        this.banners = banners;
        this.bannersChanged.next(this.banners.slice());
    }
    getMessageBunners(): Observable<any> 
    {
         return this.bannersChanged.asObservable();
    }
   
    bannersByGroup;
    getBannersUpdated() {
        return this.banners.slice();
    }
    getBannersByGroup(groupName:string) {
        this.bannersByGroup = this.banners.filter(banner => {return banner.Group == groupName?true:false;});
        // //console.log("casinobanners-----"+JSON.stringify(this.bannersByGroup) ) ;
        return this.bannersByGroup.slice();
    }
}

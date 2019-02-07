import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  url: string = environment.apiUrl;
  banners: any;

  constructor(private http: HttpClient) { }

  getAllBanners() {

    return this.http.get(this.url + "/api/AffiliatesBanners").pipe(map(
         (response: any) => {
           this.banners=response;
             return this.banners;
         }))
 }
}

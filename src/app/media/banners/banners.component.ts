import { Component, OnInit, ChangeDetectorRef, OnChanges, AfterViewChecked } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import { AffiliateBanner, AffiliatesBanners } from '../../shared/affiliate-server/affiliate.model';
import * as FileSaver from 'file-saver';
import { TooltipModule } from "ng2-tooltip";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit, AfterViewChecked {

  btnCopyJS = "copy"; btnCopyLink = "copy"; btnCopyHTML = "copy";
  subscription: Subscription; 
  banners: AffiliatesBanners[];
  affiliateID: number;

  constructor(private service: AffiliateService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe(affiliate => {
      this.banners = affiliate.AffiliatesBanners;
      this.affiliateID = affiliate.ID;
    })

    this.banners = this.service.affiliate.AffiliatesBanners;
    this.affiliateID = this.service.affiliate.ID;

  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  downloadBanner(bannerName: string, bannerID: number) {
    // fetch('http://localhost:50741/bannerh.ashx?Banner=' + bannerID).
    //   then(function (response) {

    //     return response.blob();
    //   }).then(function (myBlob) {
    //     FileSaver.saveAs(myBlob, bannerName + myBlob.type);
    //   })
    this.getBanner(bannerID, bannerName)
  }

  changeToFalse() {

  }

  getBanner(bannerID, bannerName) {
    this.getFormBanner(bannerID).subscribe(myBlob => {
      FileSaver.saveAs(myBlob, bannerName + myBlob.type);
    });
  }

  getFormBanner(bannerID): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:50741/bannerh.ashx?Banner=' + bannerID).map(
        (res: Response) => {
            return res.blob();
        });
}
}

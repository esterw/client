import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import { AffiliateBanner, AffiliatesBanners } from '../../shared/affiliate-server/affiliate.model';
import * as FileSaver from 'file-saver';
import { TooltipModule } from "ng2-tooltip";

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  btnCopyJS = "copy"; btnCopyLink = "copy"; btnCopyHTML = "copy";
  subscription: Subscription; 
  banners: AffiliatesBanners[];
  affiliateID: number;

  constructor(private service: AffiliateService) { }

  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe(affiliate => {
      this.banners = affiliate.AffiliatesBanners;
      this.affiliateID = affiliate.ID;
    })

    this.banners = this.service.affiliate.AffiliatesBanners;
    this.affiliateID = this.service.affiliate.ID;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  downloadBanner(bannerName: string, bannerID: number) {
    fetch('http://play24bet.net/bannerh.ashx?Banner=' + bannerID).
      then(function (response) {

        return response.blob();
      }).then(function (myBlob) {
        FileSaver.saveAs(myBlob, bannerName + myBlob.type);
      })
  }

  changeToFalse() {

  }
}

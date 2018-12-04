import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import { AffiliateBanner } from '../../shared/affiliate-server/affiliate.model';
import * as FileSaver from 'file-saver';
import {TooltipModule} from "ng2-tooltip";

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  btnCopyJS="copy"; btnCopyLink="copy"; btnCopyHTML="copy";
  subscription: Subscription;affSubscription: Subscription;
  constructor(private  service:AffiliateService) { }
  banners:AffiliateBanner[];
  affiliateID:number;
  ngOnInit() {
    this.subscription = this.service.BannerChanged.subscribe( items => {
      this.banners=items; 
      // this.subscription.unsubscribe();
    }) 
    this.banners=this.service.Banner;
    this.affiliateID=this.service.Affiliate.Id;
    this.affSubscription=this.service.AffiliateChanged.subscribe( affiliate=> {this.affiliateID=affiliate.Id;})

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
   this.affSubscription.unsubscribe();
}

  downloadBanner(bannerName: string,bannerID:number) {
    fetch('http://play24bet.net/bannerh.ashx?Banner='+bannerID).
    then(function (response){

  return response.blob();
   }).then(function(myBlob)
  {
    FileSaver.saveAs(myBlob, bannerName + myBlob.type);
  })


}

changeToFalse(){
  
}
}

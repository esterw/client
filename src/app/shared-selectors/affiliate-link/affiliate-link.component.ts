import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Affiliate } from '../../shared/affiliate-server/affiliate.model';
import { AffiliateService } from '../../shared/services/affiliate.service';

@Component({
  selector: 'app-affiliate-link',
  templateUrl: './affiliate-link.component.html',
  styleUrls: ['./affiliate-link.component.css']
})
export class AffiliateLinkComponent implements OnInit {

  subscription: Subscription;
  affiliate:Affiliate;
  constructor(private  service:AffiliateService) { }
  
  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe( affiliate => {
      this.affiliate=affiliate
    }) 
    this.affiliate=this.service.affiliate;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}
}

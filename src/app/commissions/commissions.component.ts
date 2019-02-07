import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../shared/services/affiliate.service';
import { AffiliateCommission } from '../shared/affiliate-server/affiliate.model';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.css']
})
export class CommissionsComponent implements OnInit {

  subscription: Subscription;
  constructor(private  service:AffiliateService) { }
  Commissions:AffiliateCommission[];
  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe( affiliate => {
      this.Commissions=affiliate.AffiliatesCommissions
    }) 
    this.Commissions=this.service.affiliate.AffiliatesCommissions;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}

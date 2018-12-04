import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../shared/affiliate-server/affiliate.service';
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
    this.subscription = this.service.CommissionChanged.subscribe( items => {
      this.Commissions=items
    }) 
    this.Commissions=this.service.Commission;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}

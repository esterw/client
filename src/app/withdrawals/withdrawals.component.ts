import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../shared/services/affiliate.service';
import {  AffilateRequestWithdrawl } from '../shared/affiliate-server/affiliate.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WithdrawalPopupComponent } from './withdrawal-popup/withdrawal-popup.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.css']
})
export class WithdrawalsComponent implements OnInit {

  subscription: Subscription;
  WithdrawlHistories:AffilateRequestWithdrawl[];

  constructor(private modalService: BsModalService,private  service:AffiliateService) { }
  
  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe( affiliate => {
      this.WithdrawlHistories= affiliate.AffiliateRequestWithdrawls.sort((a,b)=> {return new Date(a.RequestDate) > new Date(b.RequestDate) ? -1 : 1});
    }) 
    this.WithdrawlHistories = this.service.affiliate.AffiliateRequestWithdrawls;
  }

  bsModalRef: BsModalRef;
  
  openModal() {
    this.bsModalRef = this.modalService.show(WithdrawalPopupComponent);
    
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
}


}

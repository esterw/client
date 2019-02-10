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
  constructor(private modalService: BsModalService,private  service:AffiliateService) { }
  WithdrawlHistories:AffilateRequestWithdrawl[];
  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe( affiliate => {
      this.WithdrawlHistories= affiliate.AffiliateRequestWithdrawls
    }) 
    this.WithdrawlHistories=this.service.affiliate.AffiliateRequestWithdrawls;
    // this.service.closeWithdrModal.subscribe((val:boolean)=>this.closeModal());
  }

  bsModalRef: BsModalRef;
  // modalRef: any;
  openModal() {
    // this.modalRef = this.modalService.open(WithdrawalPopupComponent);
    this.bsModalRef = this.modalService.show(WithdrawalPopupComponent);
    
  }
  // closeModal() {
  //   this.modalRef.close();
  // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}


}

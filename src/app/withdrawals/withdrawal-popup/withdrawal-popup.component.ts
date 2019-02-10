import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../../shared/services/affiliate.service';
import 'jquery'
import { BsModalRef } from 'ngx-bootstrap';
import { WithdrawalsService } from 'src/app/shared/services/withdrawals.service';

@Component({
  selector: 'app-withdrawal-popup',
  templateUrl: './withdrawal-popup.component.html',
  styleUrls: ['./withdrawal-popup.component.css']
})
export class WithdrawalPopupComponent implements OnInit {

  constructor(private service: AffiliateService,
    public bsModalRef: BsModalRef,
    private withService: WithdrawalsService) { }

  serverMessage="";
  loading = false;
  amountValue = null;

  ngOnInit() {
  }
  
  resetModal() {
    this.amountValue = null;
  }

  request() {
let amountRequested = 0;
    this.loading = true;
this.service.affiliate.AffiliateRequestWithdrawls.forEach(item => {
amountRequested += item.Amount;
})

if((this.amountValue+amountRequested) <= this.service.affiliate.Balance) {

    this.service.requestWithdrawl(this.amountValue, amountRequested)
      .subscribe((responseJson) => {
        if (responseJson) {
          this.loading = false;
          this.closeModal();

        } else {
          this.loading = false;
          this.closeModal();
        }
      }
        , error => {
          this.loading = false;
          this.serverMessage = "server isn't available ):";
        }

      );
    } else {
          this.loading = false;
          this.serverMessage = "You can't request more money than you have in your balance";
    }
  }

  closeModal(){
    this.bsModalRef.hide();
    this.service.getAffiliateByID();
  }
}

import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import 'jquery'
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-withdrawal-popup',
  templateUrl: './withdrawal-popup.component.html',
  styleUrls: ['./withdrawal-popup.component.css']
})
export class WithdrawalPopupComponent implements OnInit {

  constructor(private service: AffiliateService,public bsModalRef: BsModalRef) { }
  serverMessage="";
  loading = false;
  amountValue = "";
  //serverMessage:string = "";

  ngOnInit() {
   // this.serverMessage = "";
  }
  
  resetModal() {
    this.amountValue = "";
   // this.serverMessage = "";
  }

  request() {
    this.loading = true;
    this.service.requestWithdrawl(this.amountValue)
      // .subscribe((responseJson) => {
      //   if (responseJson) {
      //     this.loading = false;
      //     this.serverMessage = responseJson.toString();
      //   } else {

      //     this.loading = false;
      //     this.closeModal();
      //   }
      // }
      //   , error => {
      //     this.loading = false;
      //     //console.log("error"+error);
      //     this.serverMessage = "server isn't available ):";
      //   }

      // );
  }
  closeModal(){
    this.bsModalRef.hide();
  }
}

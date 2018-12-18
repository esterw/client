import { Component, OnInit, ViewChild } from '@angular/core';
import { AffiliateService } from '../../../../shared/affiliate-server/affiliate.service';
import { Affiliate } from '../../../../shared/affiliate-server/affiliate.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../../../../affiliate/shared/services/affiliate-service/affiliate.service';
import 'jquery'
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-profile-popup',
  templateUrl: './edit-profile-popup.component.html',
  styleUrls: ['./edit-profile-popup.component.css']
})
export class EditProfilePopupComponent implements OnInit {

  constructor(private service: AffiliateService, public bsModalRef: BsModalRef,
    private registerService: RegisterService) { }
  
  ngOnInit() {
    this.service.affiliateChanged.subscribe(
      affiliate => this.affiliate = affiliate)
    this.affiliate = this.service.affiliate? this.service.affiliate: new Affiliate();
  }
  $:any;
  payType = [
    "Netlleter", "Skrill", "Bank wire"
  ]
  loading = false;
  PaymentTypeSelected=2;
  loadingProfile = false;
  @ViewChild("changePasswordForm") changePasswordForm: NgForm;
  affiliate: Affiliate;
  showProfile = true;
  showPayment = false;
  showPayment1 = false;
  showPayment2 = false;
  showPayment3 = false;
  showChangePassword = false;
  errPasswordMsg = ""
  showProfileClick() {
    this.showProfile = true;
    this.showPayment = false;
    this.showChangePassword = false;
  }
  showPaymentClick() {
    this.showProfile = false;
    this.showPayment = true;
    this.showPayment3=true;
    this.showChangePassword = false;
  }
  showChangePasswordClick() {
    this.showProfile = false;
    this.showPayment = false;
    this.showChangePassword = true;
  }
  
  onUpdateProfile() {
    this.loadingProfile = true;
    this.registerService.updateAffiliate(this.affiliate).subscribe((updatedAffiliate: any) => {
      this.loadingProfile = false;
      this.bsModalRef.hide();
      // this.closeModal();
    }
      , error => {
        this.loadingProfile = false;
        //console.log(error, "error updated Affiliate")
      }
    );
  }
  // closeModal(){
  //   // this.service.closeModal.next(true);
  // }
  PaymentTypeChange(){
    if(this.PaymentTypeSelected==2)
    {
      this.showPayment3=true;
      this.showPayment2=false;
      this.showPayment1=false;
    }
    else
    if(this.PaymentTypeSelected==0)
    {
      this.showPayment3=false;
      this.showPayment2=false;
      this.showPayment1=true;
    }
    else
    if(this.PaymentTypeSelected==1)
    {
      this.showPayment3=false;
      this.showPayment2=true;
      this.showPayment1=false;
    }
  }
  onChangePassword(changePasswordForm: NgForm) {
    //console.log(JSON.stringify(changePasswordForm.value))
    if (changePasswordForm.value.passwordAffiliate != this.affiliate.Password)
      this.errPasswordMsg = "current password is incorrect"
    else {
    this.loading = true;
      this.errPasswordMsg = "";
      this.affiliate.Password = changePasswordForm.value.NewPassword;
      this.registerService.updateAffiliate(this.affiliate).subscribe((updatedAffiliate: any) => {
        this.loading = false;
        this.bsModalRef.hide();
        // this.service.closeModal.next(true);
      }
        , error => {
          this.loading = false;
        }
      );
    }

  }
}

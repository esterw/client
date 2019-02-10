import { Component, OnInit, ViewChild } from '@angular/core';
import { AffiliateService } from '../../../../shared/services/affiliate.service';
import { Affiliate, AffiliateAccount, AffiliateBankAccount } from '../../../../shared/affiliate-server/affiliate.model';
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

  affiliateAccount: AffiliateAccount;
  loadingAccount: boolean;

  constructor(private service: AffiliateService, public bsModalRef: BsModalRef,
    private affService: AffiliateService) { }

  ngOnInit() {

    this.service.affiliateChanged.subscribe(

      affiliate => {
        this.affiliate = affiliate;

        if (this.affiliate && !this.affiliate.AffiliateBankAccount) {
          this.affiliate.AffiliateBankAccount = new AffiliateBankAccount()
          this.affiliate.AffiliateBankAccount.PaymentType = "Bank wire"
        }
      }
    )


    this.affiliate = this.service.affiliate ? this.service.affiliate : new Affiliate();

    if (this.affiliate && !this.affiliate.AffiliateBankAccount) {
      this.affiliate.AffiliateBankAccount = new AffiliateBankAccount()
      this.affiliate.AffiliateBankAccount.PaymentType = "Bank wire"
    }
  }
  $: any;
  payType = [
    "Netlleter", "Skrill", "Bank wire"
  ]
  loading = false;
  PaymentTypeSelected = 2;
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
    this.showPayment3 = true;
    this.showChangePassword = false;
  }
  showChangePasswordClick() {
    this.showProfile = false;
    this.showPayment = false;
    this.showChangePassword = true;
  }

  onUpdateProfile() {
    this.loadingProfile = true;
    this.service.updateAffiliate(this.affiliate).subscribe((updatedAffiliate: any) => {
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


  onUpdateAccount() {
    this.loadingAccount = true;
    this.affService.updateAccount(this.affiliate.AffiliateBankAccount).subscribe(res => {
      this.loadingAccount = false;
    });
  }

  PaymentTypeChange() {
    if (this.PaymentTypeSelected == 2) {
      this.showPayment3 = true;
      this.showPayment2 = false;
      this.showPayment1 = false;
    }
    else
      if (this.PaymentTypeSelected == 0) {
        this.showPayment3 = false;
        this.showPayment2 = false;
        this.showPayment1 = true;
      }
      else
        if (this.PaymentTypeSelected == 1) {
          this.showPayment3 = false;
          this.showPayment2 = true;
          this.showPayment1 = false;
        }
  }

  onChangePassword(changePasswordForm: NgForm) {
    if (changePasswordForm.value.passwordAffiliate != this.affiliate.Password)

      this.errPasswordMsg = "current password is incorrect"

    else {

      this.loading = true;
      this.errPasswordMsg = "";
      this.affiliate.Password = changePasswordForm.value.NewPassword;
      this.affService.updateAffiliate(this.affiliate).subscribe((updatedAffiliate: any) => {
        this.loading = false;
        this.bsModalRef.hide();
      }
        , error => {
          this.loading = false;
        }
      );
    }

  }
}

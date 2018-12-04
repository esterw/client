import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Affiliate } from '../../../../shared/affiliate-server/affiliate.model';
import { RegisterService } from '../../../shared/services/affiliate-service/affiliate.service';
import { TimezoneService } from '../../../shared/services/timezoneapi/timezoneapi.service';
import { Timezone } from '../../../shared/services/timezoneapi/timezoneapi.model';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-register-modal-affiliate',
  templateUrl: './register-modal-affiliate.component.html',
  styleUrls: ['./register-modal-affiliate.component.css']
})
export class RegisterModalAffiliateComponent implements OnInit {

  timezone: Timezone;
  @ViewChild("affRegisterForm") registerForm: NgForm;
  subscription: Subscription;
  Affiliate: Affiliate;
  conditionsChecked = false;
  loading = false;
  message: string = "";

  constructor(private affiliateService: RegisterService,  private timezoneService: TimezoneService,  private router:Router,public bsModalRef: BsModalRef) { }

  ngOnInit() {

    this.Affiliate = new Affiliate();

    this.subscription = this.timezoneService.getObservable().subscribe(timezone => {
      this.timezone = timezone;
      this.Affiliate.Country = timezone.data.country;
    });

    if(this.timezoneService.timezone.data !=undefined)
    {
      this.Affiliate.Country = this.timezoneService.timezone.data.country;
      this.timezone = this.timezoneService.timezone;
    }
      //this.Affiliate.
    
  }

  onSubmitForm() {
    if (this.registerForm.valid && this.conditionsChecked == true) {
    this.loading = true;
      let form = this.registerForm.value;
      let currentDate = new Date();
      this.Affiliate.RegistrationDate = currentDate;
      var affiliateModel = <AffiliateViewModel>{};
      
      affiliateModel.CompanyName = this.Affiliate.CompanyName;
      affiliateModel.Phone = this.Affiliate.Phone;
      affiliateModel.Address1 = this.Affiliate.Address1;
      affiliateModel.Address2 = this.Affiliate.Address2;
      affiliateModel.City = this.Affiliate.City;
      affiliateModel.Country = this.Affiliate.Country;
      affiliateModel.State = this.Affiliate.State;
      affiliateModel.ZipCode = this.Affiliate.ZipCode;
      affiliateModel.Email = this.Affiliate.Email;
      affiliateModel.Password = this.Affiliate.Password;
      affiliateModel.FirstName = this.Affiliate.Name;
      affiliateModel.LastName = this.Affiliate.Family;

      //console.log("Affiliate Submission ");
      //console.log(affiliateModel);

      this.affiliateService.addAffiliate(this.Affiliate)
        .subscribe((responseJson) => {
          this.loading = false;
          this.bsModalRef.hide();
         this.router.navigate(['/Login']);
        }
          , error => {
            this.loading = false;
            this.message = "server isn't available ):";
         //   console.log(error);
          }

        );
    }
  }
}

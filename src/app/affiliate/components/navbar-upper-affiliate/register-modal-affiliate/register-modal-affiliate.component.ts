import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Affiliate } from '../../../../shared/affiliate-server/affiliate.model';
import { RegisterService } from '../../../shared/services/affiliate-service/affiliate.service';
import { TimezoneService } from '../../../shared/services/timezoneapi/timezoneapi.service';
import { Timezone } from '../../../shared/services/timezoneapi/timezoneapi.model';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { AffiliateService } from 'src/app/shared/services/affiliate.service';
import * as moment from 'moment';

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

  constructor(private affiliateService: AffiliateService, private timezoneService: TimezoneService, private router: Router, public bsModalRef: BsModalRef) { }

  ngOnInit() {

    this.Affiliate = new Affiliate();
    this.Affiliate.Country = "israel";

  }

  onSubmitForm() {
    if (this.registerForm.valid && this.conditionsChecked == true) {
      this.loading = true;
      let form = this.registerForm.value;
      let currentDate = moment(new Date()).format()
      this.Affiliate.RegistrationDate = currentDate;

      this.affiliateService.newAffiliate(this.Affiliate)
        .subscribe((responseJson: any) => {
          this.loading = false;
          this.bsModalRef.hide();
          localStorage.setItem('userID', responseJson.ID)
          this.router.navigate(['/Login']);
        }
          , error => {
            this.loading = false;
            this.message = "server isn't available ):";
          }

        );
    }
  }
}

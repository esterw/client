import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import { AffiliateAccount } from '../../shared/affiliate-server/affiliate.model';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-statement-report',
  templateUrl: './statement-report.component.html',
  styleUrls: ['./statement-report.component.css']
})
export class StatementReportComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-default';
  daterangepickerModel: Date[];
  dates: Date[] = new Array<Date>();
  selectedDate: Date = new Date(2017, 11, 1);
  subscription: Subscription;
  constructor(private service: AffiliateService) { }
  AffiliateAccount: AffiliateAccount[];
  filteredData: AffiliateAccount[];
  ngOnInit() {
    this.bsConfig = Object.assign({}, 
      { containerClass: this.colorTheme,
        rangeInputFormat : 'DD.MM.YYYY',
        showWeekNumbers: false,
        rangeSeparator: ' - '
    });
    this.subscription = this.service.AccountChanged.subscribe(items => {
      this.AffiliateAccount = items;
      this.filteredData = items;
    })
    this.AffiliateAccount = this.service.Account;
    this.filteredData = this.service.Account;
    for (let index = 0; index < 12; index++) {
      this.dates.push(new Date(2017, index, 1))
    }
  }
  find() {
    this.filteredData=this.AffiliateAccount.filter(item => (new Date(item.AccountDate) >= this.daterangepickerModel[0]) &&  (new Date(item.AccountDate) <= this.daterangepickerModel[1]) );
  }
  reset() {
    this.filteredData=this.AffiliateAccount;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

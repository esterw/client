import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../../shared/services/affiliate.service';
import { AffiliateRevenueReport } from '../../shared/affiliate-server/affiliate.model';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-revenue-report',
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.css']
})
export class RevenueReportComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-default';
  daterangepickerModel: Date[];
  dates: Date[] = new Array<Date>();

  selectedDate: Date = new Date(2017, 11, 1)
  subscription: Subscription;
  constructor(private service: AffiliateService) { }
  RevenueReport: AffiliateRevenueReport[];
  filteredData: AffiliateRevenueReport[];

  ngOnInit() {
    this.bsConfig = Object.assign({},
      {
        containerClass: this.colorTheme,
        rangeInputFormat: 'DD.MM.YYYY',
        showWeekNumbers: false,
        rangeSeparator: ' - '
      });
    this.subscription = this.service.affiliateChanged.subscribe(affiliate => {
      this.RevenueReport = affiliate.AffiliateRevenueReports;
      this.filteredData = affiliate.AffiliateRevenueReports;
    })
    this.RevenueReport = this.service.affiliate.AffiliateRevenueReports;
    this.filteredData = this.service.affiliate.AffiliateRevenueReports;
    for (let index = 0; index < 12; index++) {
      this.dates.push(new Date(2017, index, 1))
    }
  }

  find() {
    this.filteredData = this.RevenueReport.filter(item => (new Date(item.AffiliateDate) >= this.daterangepickerModel[0]) && (new Date(item.AffiliateDate) <= this.daterangepickerModel[1]));
  }

  reset() {
    this.filteredData = this.RevenueReport;
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

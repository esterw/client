import { Component, OnInit } from '@angular/core';
import { AffiliateSummaryPerSite } from '../../shared/affiliate-server/affiliate.model';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import { Subscription } from 'rxjs';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

//-----------date picker
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
//-----------date picker

@Component({
  selector: 'app-summary-per-site-report',
  templateUrl: './summary-per-site-report.component.html',
  styleUrls: ['./summary-per-site-report.component.css']
})
export class SummaryPerSiteReportComponent implements OnInit {
  subscription: Subscription;
  dates: Date[] = new Array<Date>();
  selectedProduct="";
  //products=new Array<string>();
  selectedDateFrom: Date = new Date(2017, 11, 1);
  selectedDateTill: Date = new Date(2017, 11, 1);
  
  constructor(private  service:AffiliateService,calendar: NgbCalendar) { 
  this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  // was an array

  SummaryPerSite:AffiliateSummaryPerSite;
  filteredData:AffiliateSummaryPerSite;
  ngOnInit() {
    for (let index = 0; index < 12; index++) {
      this.dates.push(new Date(2017, index, 1))
    }
    this.subscription = this.service.affiliateChanged.subscribe( affiliate => {
      this.SummaryPerSite=affiliate.AffiliateSummaryPerSites; 
      this.filteredData=affiliate.AffiliateSummaryPerSites;
    }) 
    this.SummaryPerSite=this.service.affiliate.AffiliateSummaryPerSites;
    this.filteredData=this.service.affiliate.AffiliateSummaryPerSites;
    this.selectedProduct="Select BannerID";
    //const products=this.SummaryPerSite.map(data => data.Product);
    //this.products=products.filter((x,i,a)=> x&& a.indexOf(x)==i)
  }
  find() {
    let affiliateDate;
    //new Date(item.AffiliateSummaryDate)>new Date(this.selectedDateFrom) 
     if(this.selectedProduct=="Select BannerID")
    this.reset();
    // else // new comment
    // this.filteredData=this.SummaryPerSite.filter(item => item.Product==this.selectedProduct );
   
  }
  reset() {
    this.filteredData=this.SummaryPerSite;
  }

//-----------date picker
hoveredDate: NgbDateStruct;
fromDate: NgbDateStruct;
toDate: NgbDateStruct;

  onDateChange(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
  model;

//-----------date picker

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}

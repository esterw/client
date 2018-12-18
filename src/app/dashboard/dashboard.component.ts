import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Affiliate, AffiliateRevenueReport, SubAffiliates } from '../shared/affiliate-server/affiliate.model';
import { AffiliateService } from '../shared/affiliate-server/affiliate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showThisMonth = true;
  showLastMonth = false;
  showThreeMonth = false;
  showSixMonth = false;
  showYear = false;

  SubAffiliatesURL = "None";
  subscription: Subscription;
  subscriptionRevenueReport: Subscription;
  subscriptionSubAffiliates: Subscription;
  affiliate: Affiliate;
  RevenueReport: AffiliateRevenueReport[];
  SubAffiliates: SubAffiliates[];
  constructor(private service: AffiliateService) { }
  signupsSum = 0;
  depositsCount = 0;
  turnoversSum = 0;
  profitSum = 0;
  todayDate = new Date();

  deactiveAll() {
    this.showThisMonth = false;
    this.showLastMonth = false;
    this.showThreeMonth = false;
    this.showSixMonth = false;
    this.showYear = false;
  }


  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe(affiliate => {
      this.affiliate = affiliate;
      this.RevenueReport = affiliate.AffiliateRevenueReports;
      let thisMonthRev = affiliate.AffiliateRevenueReports.filter(x => (new Date(x.AffiliateDate).getMonth() == this.todayDate.getMonth()) && (new Date(x.AffiliateDate).getFullYear() == this.todayDate.getFullYear()))
      this.revenueToShow(thisMonthRev);
      this.SubAffiliates = affiliate.SubAffiliates;
      // this.SubAffiliatesURL = affiliate.SubAffiliates[0].URL // new comment;
      this.SubAffiliatesURL = "http/esther.com";
    })

    this.affiliate = this.service.affiliate;
    this.SubAffiliates = this.service.affiliate.SubAffiliates;
    this.RevenueReport = this.service.affiliate.AffiliateRevenueReports;
    if (this.service.affiliate.AffiliateRevenueReports != undefined) {
      console.log("---defined---");
      let thisMonthRev = this.service.affiliate.AffiliateRevenueReports.filter(x => (new Date(x.AffiliateDate).getMonth() == this.todayDate.getMonth()) && (new Date(x.AffiliateDate).getFullYear() == this.todayDate.getFullYear()))
      this.revenueToShow(thisMonthRev);
    }
  }
  // this.depositsCount = this.service.RevenueReport.length;
  // this.depositsCount = this.service.RevenueReport.length;
  //this.RevenueReport = this.service.RevenueReport;


  displayThisMonth() {

    let thisMonthRev: AffiliateRevenueReport[] = this.RevenueReport.filter(x => (new Date(x.AffiliateDate).getMonth() == this.todayDate.getMonth()) && (new Date(x.AffiliateDate).getFullYear() == this.todayDate.getFullYear()))
    this.revenueToShow(thisMonthRev);
  }

  displayLastMonth() {

    let lastMonthRev: AffiliateRevenueReport[] = this.RevenueReport.filter(x => (new Date(x.AffiliateDate).getMonth() == this.todayDate.getMonth() - 1) && (new Date(x.AffiliateDate).getFullYear() == this.todayDate.getFullYear()))
    this.revenueToShow(lastMonthRev);
  }

  displayThreeMonth() {

    let threeMonth = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth() - 2, 1);
    let lastThreeRev: AffiliateRevenueReport[] = this.RevenueReport.filter(x => new Date(x.AffiliateDate) >= threeMonth)
    //; //console.log("three month===========",threeMonth,"new date===========",new Date(x.AffiliateDate))

    this.revenueToShow(lastThreeRev);

  }

  displaySixMonth() {
    let sixMonth = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth() - 5, 1);
    let lastSixRev: AffiliateRevenueReport[] = this.RevenueReport.filter(x => new Date(x.AffiliateDate) >= sixMonth)
    this.revenueToShow(lastSixRev);

  }

  displayYear() {
    let year = new Date(this.todayDate.getFullYear() - 1, this.todayDate.getMonth(), this.todayDate.getDate());
    //console.log("three month===========",year)
    let YearRev: AffiliateRevenueReport[] = this.RevenueReport.filter(x => new Date(x.AffiliateDate) >= year)
    this.revenueToShow(YearRev);

  }



  revenueToShow(arrStatistics: AffiliateRevenueReport[]) {
    this.signupsSum = 0;
    this.turnoversSum = 0;
    this.profitSum = 0;
    this.depositsCount = 0;
  //console.log("****************arrStatistics***************"+arrStatistics)
    arrStatistics.forEach(r => {
      this.signupsSum += r.Registrations;
      this.turnoversSum += r.TurnOver,
        this.profitSum += r.Profit,
        this.depositsCount += r.Deposits
    })
  }





  //new chart-----------------------------------------------
  public lineChartData: Array<any> = [
    [20, 43, 10, 18, 77, 25, 40],
    [65, 50, 70, 80, 42, 46, 21]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(73,147,191,0.9)',
      borderColor: 'rgba(73,147,191,0.9)',
      pointBackgroundColor: 'rgba(73,147,191,0.9)',
      pointBorderColor: 'rgba(73,147,191,0.9)',
      pointHoverBackgroundColor: 'rgba(73,147,191,0.9)',
      pointHoverBorderColor: 'rgba(73,147,191,0.9)'
    },
    { // grey
      backgroundColor: 'rgba(209,212,220,0.9)',
      borderColor: 'rgba(209,212,220,0.9)',
      pointBackgroundColor: 'rgba(209,212,220,0.9)',
      pointBorderColor: 'rgba(209,212,220,0.9)',
      pointHoverBackgroundColor: 'rgba(209,212,220,0.9)',
      pointHoverBorderColor: 'rgba(209,212,220,0.9)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  public chartClicked(e: any): void {
    //console.log(e);
  }

  public chartHovered(e: any): void {
    //console.log(e);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}

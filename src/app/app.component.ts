import { Component, OnInit } from '@angular/core';
import { AffiliateService } from './shared/services/affiliate.service';
import { UniquePipe } from './shared/shared-pipes/uniquw-pipe.pipe';
import { ContentPagesService } from './shared/ContentPages/ContentPages.service';
import { TimezoneService } from './affiliate/shared/services/timezoneapi/timezoneapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit() {
    // this.contentService.getContents();
    // this.timezoneService.get();
  }
  title = 'app';id;
  constructor(private router:Router,private service:AffiliateService,private contentService:ContentPagesService, private timezoneService: TimezoneService){}
  isLogined=false;
}

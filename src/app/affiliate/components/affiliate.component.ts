import { Component, OnInit } from '@angular/core';
import { ContentPagesService } from '../../shared/ContentPages/ContentPages.service';
import { ContentPagesFAQService } from '../shared/services/ContentPagesFAQs/ContentPagesFAQs.service';
import { FAQsService } from '../shared/services/FAQs/FAQs.service';
import { BannersService } from '../shared/services/Banners/banners.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import * as JWT from 'jwt-decode';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrls: ['./affiliate.component.css']
})
export class AffiliateComponent implements OnInit {


  constructor(private contentfAQSService: ContentPagesFAQService, private router: Router, private fAQsService: FAQsService, private contentService: ContentPagesService,
    private bannersService: BannersService, private activatedRoute: ActivatedRoute) { }
  isLogined = false;
  ngOnInit() {
    //this.isLogined = localStorage.getItem('user') ? true : false;
    // if (this.isLogined == true) {
    //   this.router.navigate(['/Login']);
    // }
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   if (params['id']) {
    //     let affiliateID = params['id'];
    //     localStorage.setItem("user",affiliateID) ;

    //     if (localStorage.getItem('user'))
    //       this.router.navigate(['/Homepage']);
    //     else
    //       var si = setInterval(() => {
    //         if (localStorage.getItem('user')) {
    //           this.router.navigate(['/Homepage']);
    //           clearInterval(si);
    //         }
    //       }, 1000);


    //   }
    // });

    // this.contentfAQSService.getcontentsFAQs();
    // // this.contentService.getContents();
    // this.fAQsService.getContentsFAQ();
    // this.bannersService.getBanners();
  }
}

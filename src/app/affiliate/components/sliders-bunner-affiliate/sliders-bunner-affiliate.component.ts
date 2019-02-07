   import { Component, OnInit } from '@angular/core';
   import { Subscription } from 'rxjs';
   import { forEach } from '@angular/router/src/utils/collection';
import { Banner } from '../../shared/services/Banners/banners.model';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel'
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { RegisterModalAffiliateComponent } from '../navbar-upper-affiliate/register-modal-affiliate/register-modal-affiliate.component';
   @Component({
    selector: 'app-sliders-bunner-affiliate',
    templateUrl: './sliders-bunner-affiliate.component.html',
    styleUrls: ['./sliders-bunner-affiliate.component.css']
  })
   export class SlidersBunnerAffiliateComponent implements OnInit {
    subscription: Subscription;
    banners: Banner[];
    carouselBanner1: Banner;
    carouselBanner2: Banner;
    card3: Banner;
    card4: Banner;
   carouselBanner:any;
    constructor(private modalService: BsModalService) {}

    ngOnInit() {
      // this.subscription = this.bannersService.getMessageBunners().subscribe(
      //   banners => { 
      //     this.banners = banners.filter(banner => { return banner.Group == "affiliate" });
      //     this.carouselBanner1 = this.banners.filter(banner => { return banner.Name == "carouselBanner1" })[0];
      //     this.carouselBanner2 = this.banners.filter(banner => { return banner.Name == "carouselBanner2" })[0];
      //   });
      //   this.banners =  this.bannersService.banners.filter(banner => { return banner.Group == "affiliate" });
      //   this.carouselBanner1 = this.banners.filter(banner => { return banner.Name == "carouselBanner1" })[0];
      //   this.carouselBanner2 = this.banners.filter(banner => { return banner.Name == "carouselBanner2" })[0];
   
      this.carouselBanner = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 1,
        speed: 2000,
        interval: 4000,
        point: {
          visible: false,
          pointStyles: `
            .ngxcarouselPoint {
              list-style-type: none;
              text-align: center;
              padding: 12px;
              margin: 0;
              white-space: nowrap;
              overflow: auto;
              position: absolute;
              width: 100%;
              bottom: 20px;
              left: 0;
              box-sizing: border-box;
            }
            .ngxcarouselPoint li {
              display: inline-block;
              border-radius: 999px;
              background: rgba(255, 255, 255, 0.55);
              padding: 5px;
              margin: 0 3px;
              transition: .4s ease all;
            }
            .ngxcarouselPoint li.active {
                background: white;
                width: 10px;
            }
          `
        },
        load: 2,
        loop: true,
        touch: true
      }
    }
   
      bsModalRef: BsModalRef;
    openRegisterPopup(){
      this.bsModalRef = this.modalService.show(RegisterModalAffiliateComponent);
    
    }   
       
        /* It will be triggered on every slide*/
        onmoveFn(data: NgxCarouselStore) {
        ////console.log(data);*/
        }
   }
   
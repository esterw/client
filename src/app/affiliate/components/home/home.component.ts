import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Banner } from '../../shared/services/Banners/banners.model';
import { BannersService } from '../../shared/services/Banners/banners.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { RegisterModalAffiliateComponent } from '../navbar-upper-affiliate/register-modal-affiliate/register-modal-affiliate.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subscription: Subscription;
  banners: Banner[];
  card1: Banner;
  card2: Banner;
  card3: Banner;
  card4: Banner;
  constructor(private bannersService: BannersService, private modalService: BsModalService) {}

  ngOnInit() {
    this.bannersService.getMessageBunners();
    this.subscription = this.bannersService.getMessageBunners().subscribe(
      banners => { 
        this.banners = banners.filter(banner => { return banner.Group == "affiliate" });
        this.card1 = this.banners.filter(banner => { return banner.Name == "card1" })[0];
        this.card2 = this.banners.filter(banner => { return banner.Name == "card2" })[0];
        this.card3 = this.banners.filter(banner => { return banner.Name == "card3" })[0];
        this.card4 = this.banners.filter(banner => { return banner.Name == "card4" })[0];
      });
      this.banners =this.bannersService.banners.filter(banner => { return banner.Group == "affiliate" });
      this.card1 = this.banners.filter(banner => { return banner.Name == "card1" })[0];
      this.card2 = this.banners.filter(banner => { return banner.Name == "card2" })[0];
      this.card3 = this.banners.filter(banner => { return banner.Name == "card3" })[0];
      this.card4 = this.banners.filter(banner => { return banner.Name == "card4" })[0];
  }
  bsModalRef: BsModalRef;
  openRegisterPopup() {
    this.bsModalRef = this.modalService.show(RegisterModalAffiliateComponent);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}

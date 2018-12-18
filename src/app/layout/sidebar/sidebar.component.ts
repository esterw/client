import { Component, OnInit } from '@angular/core';
import { Affiliate, AffiliateTicket } from '../../shared/affiliate-server/affiliate.model';
import { AffiliateService } from '../../shared/affiliate-server/affiliate.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfilePopupComponent } from './popups/edit-profile-popup/edit-profile-popup.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  affiliate: Affiliate;
  tickets: AffiliateTicket[];
  subscription: Subscription;
  unReadMessages = 0;

  constructor(private modalService: BsModalService,
    private authService: AuthService,
    private service: AffiliateService,
    private router: Router) { }

  ngOnInit() {

    this.subscription = this.service.affiliateChanged.subscribe(affiliate => {
      this.affiliate = affiliate;
      if (this.service.affiliate.AffiliateTickets) {
      this.tickets = affiliate.AffiliateTickets.filter(x => x.IsReadByAffiliate == false);
      this.unReadMessages = this.tickets.length;
      }
    })

    this.affiliate = this.service.affiliate;

    if (this.service.affiliate.AffiliateTickets) {
      this.tickets = this.service.affiliate.AffiliateTickets.filter(x => x.IsReadByAffiliate == false);
      this.unReadMessages = this.tickets.length;
    }
  }

  logout() {
    //localStorage.removeItem('user');
    this.authService.logout();
    // window.location.href="http://affiliatemf.com"
    this.router.navigate(['/Homepage']);
  }
  bsModalRef: BsModalRef;
  modalRef: any;
  openEditProfilePopup() {
    // this.modalRef = this.modalService.open(EditProfilePopupComponent);
    this.bsModalRef = this.modalService.show(EditProfilePopupComponent);

  }

  // close() {
  //   this.modalRef.close();
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

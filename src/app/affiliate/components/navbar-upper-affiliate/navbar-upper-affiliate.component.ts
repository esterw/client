import { Component, OnInit } from '@angular/core';
import { RegisterModalAffiliateComponent } from './register-modal-affiliate/register-modal-affiliate.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginAffiliateModalComponent } from './login-affiliate-modal/login-affiliate-modal.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-upper-affiliate',
  templateUrl: './navbar-upper-affiliate.component.html',
  styleUrls: ['./navbar-upper-affiliate.component.css']
})
export class NavbarUpperAffiliateComponent implements OnInit {
userName:string="Mister777";
  constructor(private modalService: BsModalService, private authService: AuthService, private route: Router) {
  
   }
  
  ngOnInit() {
  }
  bsModalRef: BsModalRef;
  openRegisterPopup() {
    this.bsModalRef = this.modalService.show(RegisterModalAffiliateComponent);
  }

  openLoginPopup() {
    this.bsModalRef = this.modalService.show(LoginAffiliateModalComponent);
  }

  logout() {
   // console.log('Logout ');
    this.authService.logout();
    //this.route.navigateByUrl('/Login');
    this.route.navigate(['/Homepage']);
    //window.location.href = "/"
  }

}

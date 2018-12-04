import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../shared/affiliate-server/affiliate.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as JWT from 'jwt-decode';


@Component({
  selector: 'app-affiliate-login-app',
  templateUrl: './affiliate-login-app.component.html',
  styleUrls: ['./affiliate-login-app.component.css']
})
export class AffiliateLoginAppComponent implements OnInit {

  constructor(private service: AffiliateService, private router: Router) { }
  id; isLogined = false;
  loading = true;
  subscription: Subscription;
  IDcut
  ngOnInit() {
    //console.log(localStorage.getItem('auth'));
    this.service.getAffiliateByID();
    this.subscription = this.service.AffiliateChanged.subscribe(x => { this.loading = false; this.subscription.unsubscribe(); })
  }
  reloadData() {
    this.service.getAffiliateByID();
  }


  sidebarOpenClose() {

    $('#side-mobile-btn').toggleClass('open');

    if ($(".app-sidebar").css('left') == '-260px') {

      $(".app-sidebar").css({ "left": "0", "opacity": "1" });

      $("#side-mobile-btn").css({
        "left": "260px",
        "top": "91px",
      });

    }

    else {

      $(".app-sidebar").css({ "left": "-260px" });

      $("#side-mobile-btn").css({
        "left": "0",
        "top": "91px",
      });

    }


  }


}

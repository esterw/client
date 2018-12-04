import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentPagesService } from '../../shared/ContentPages/ContentPages.service';
import { Content } from '../../shared/ContentPages/ContentPages.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AboutUsPopupComponent } from './popups/about-us-popup/about-us-popup.component';
import { ResponsibleGamingPopupComponent } from './popups/responsible-gaming-popup/responsible-gaming-popup.component';
import { CookiePolicyPopupComponent } from './popups/cookie-policy-popup/cookie-policy-popup.component';
import { PrivacyPolicyPopupComponent } from './popups/privacy-policy-popup/privacy-policy-popup.component';
import { TermsAndConditionsPopupComponent } from './popups/terms-and-conditions-popup/terms-and-conditions-popup.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private contentService: ContentPagesService, private modalService: BsModalService) { }
  contentConditions;
  contents: Content[];
  content: Content;
  subscription: Subscription;
  PrivacyContent: Content;
  ngOnInit() {
    this.contentConditions = new Content();
    //console.log("content-----------");
    this.subscription = this.contentService.getObservableBanners().subscribe(
      contents => {
        this.contents = contents.filter(content => { return content.Group == "Recomended Footer" });
        this.content = this.contents.filter(content => { return content.Name == "About" })[0];
        this.contents = contents.filter(content => { return content.Group == "Footer" });
        this.PrivacyContent = this.contents.filter(content => { return content.Name == "Privacy" })[0];
        this.contentAU = this.contents.filter(content => { return content.Name == "About Us" })[0];
        this.contentRG = this.contents.filter(content => { return content.Name == "Responsible Gaming" })[0];
        this.contentCP = this.contents.filter(content => { return content.Name == "Cookie Policy" })[0];
        this.contentPP = this.contents.filter(content => { return content.Name == "Privacy Policy" })[0];
        this.contentTC = this.contents.filter(content => { return content.Name == "Terms and Conditions" })[0];
      }
    );
    this.contents =this.contentService.contents.filter(content => { return content.Group == "Recomended Footer" });
        this.content = this.contents.filter(content => { return content.Name == "About" })[0];
        this.contents = this.contentService.contents.filter(content => { return content.Group == "Footer" });
        this.PrivacyContent = this.contents.filter(content => { return content.Name == "Privacy" })[0];

   
  }

  contentAU: Content;
  contentRG: Content;
  contentCP: Content;
  contentPP: Content;
  contentTC: Content;
  bsModalRef: BsModalRef;

  openAboutUsPopup() {
    const initialState = {
      contents: this.contents,
      content: this.contentAU,
    };
    this.bsModalRef = this.modalService.show(AboutUsPopupComponent, { initialState });
  }

  openResponsibleGamingPopup() {
    const initialState = {
      contents: this.contents,
      content: this.contentRG,
    };
    this.bsModalRef = this.modalService.show(ResponsibleGamingPopupComponent, { initialState });
  }
  openCookiePolicyPopup() {
    const initialState = {
      contents: this.contents,
      content: this.contentCP,
    };
    this.bsModalRef = this.modalService.show(CookiePolicyPopupComponent, { initialState });
  }
  openPrivacyPolicyPopup() {
    const initialState = {
      contents: this.contents,
      content: this.contentPP,
    };
    this.bsModalRef = this.modalService.show(PrivacyPolicyPopupComponent, { initialState });
  }
  openTermsConditionsPopup() {
    const initialState = {
      contents: this.contents,
      content: this.contentTC,
    };
    this.bsModalRef = this.modalService.show(TermsAndConditionsPopupComponent, { initialState });
  }
}

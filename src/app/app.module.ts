import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { AppComponent } from './app.component';
import { NavbarUpperComponent } from './layout/navbar-upper/navbar-upper.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AppRouting } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { MediaComponent } from './media/media.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { FaqComponent } from './faq/faq.component';
import { AffiliateService } from './shared/services/affiliate.service';
import { ChartsModule } from 'ng2-charts'; 
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { CommonModule, DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AffiliateLinkComponent } from './shared-selectors/affiliate-link/affiliate-link.component';
import { RevenueReportComponent } from './reports/revenue-report/revenue-report.component';
import { StatementReportComponent } from './reports/statement-report/statement-report.component';
import { SummaryPerSiteReportComponent } from './reports/summary-per-site-report/summary-per-site-report.component';
import { BannersComponent } from './media/banners/banners.component';
import { PixelsComponent } from './media/pixels/pixels.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UniquePipe } from './shared/shared-pipes/uniquw-pipe.pipe';
import { CookiePolicyPopupComponent } from './layout/footer/popups/cookie-policy-popup/cookie-policy-popup.component';
import { AboutUsPopupComponent } from './layout/footer/popups/about-us-popup/about-us-popup.component';
import { PrivacyPolicyPopupComponent } from './layout/footer/popups/privacy-policy-popup/privacy-policy-popup.component';
import { ResponsibleGamingPopupComponent } from './layout/footer/popups/responsible-gaming-popup/responsible-gaming-popup.component';
import { TermsAndConditionsPopupComponent } from './layout/footer/popups/terms-and-conditions-popup/terms-and-conditions-popup.component';
import { ContentPagesService } from './shared/ContentPages/ContentPages.service';
import { EditProfilePopupComponent } from './layout/sidebar/popups/edit-profile-popup/edit-profile-popup.component';
import { AffiliateComponent } from './affiliate/components/affiliate.component';
import { HomeComponent } from './affiliate/components/home/home.component';
import { InformationComponent } from './affiliate/components/information/information.component';
import { EaringInfoComponent } from './affiliate/components/information/earing-info/earing-info.component';
import { LinksAndCreativeInfoComponent } from './affiliate/components/information/links-and-creative-info/links-and-creative-info.component';
import { AffProgramInfoComponent } from './affiliate/components/information/aff-program-info/aff-program-info.component';
import { TermsAndConditionsInfoComponent } from './affiliate/components/information/terms-and-conditions-info/terms-and-conditions-info.component';
import { RestrictionsInfoComponent } from './affiliate/components/information/restrictions-info/restrictions-info.component';
import { ContactUsComponent } from './affiliate/components/contact-us/contact-us.component';
import { NavbarAffiliateComponent } from './affiliate/components/navbar-affiliate/navbar-affiliate.component';
import { SlidersBunnerAffiliateComponent } from './affiliate/components/sliders-bunner-affiliate/sliders-bunner-affiliate.component';
import { NavbarInformationComponent } from './affiliate/components/information/navbar-information/navbar-information.component';
import { RegisterService } from './affiliate/shared/services/affiliate-service/affiliate.service';
import { AuthenticationService } from './affiliate/shared/services/Authentication/Authentication.service';
import { ContentPagesFAQService } from './affiliate/shared/services/ContentPagesFAQs/ContentPagesFAQs.service';
import { FAQsService } from './affiliate/shared/services/FAQs/FAQs.service';
import { TimezoneService } from './affiliate/shared/services/timezoneapi/timezoneapi.service';
import { SharedModule } from './affiliate/shared/services/shared.module';
import { LoginAffiliateModalComponent } from './affiliate/components/navbar-upper-affiliate/login-affiliate-modal/login-affiliate-modal.component';
import { RegisterModalAffiliateComponent } from './affiliate/components/navbar-upper-affiliate/register-modal-affiliate/register-modal-affiliate.component';
import { NavbarUpperAffiliateComponent } from './affiliate/components/navbar-upper-affiliate/navbar-upper-affiliate.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { AlertService } from './affiliate/shared/services/Authentication/alert.service';
import { MessagesPopupComponent } from './messages/messages-popup/messages-popup.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AffiliateLoginAppComponent } from './affiliate-login-app/affiliate-login-app.component';
import { TextFilterPipe } from './shared/shared-pipes/filter-pipe.pipe';
import { WithdrawalPopupComponent } from './withdrawals/withdrawal-popup/withdrawal-popup.component';
//import {ToolTipModule} from 'angular2-tooltip'
//import { TooltipModule } from 'angular2-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {TooltipModule} from "ng2-tooltip";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './shared/shared-directives/modal-directive';
import { ModalService } from './shared/modal-service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthGuard } from './shared/affiliate-server/auth.gaurd';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUpperComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    ReportsComponent,
    CommissionsComponent,
    WithdrawalsComponent,
    MediaComponent,
    MessagesComponent,
    SettingsComponent,
    FaqComponent,
    AffiliateLinkComponent,
    RevenueReportComponent,
    StatementReportComponent,
    SummaryPerSiteReportComponent,
    BannersComponent,
    PixelsComponent,
    UniquePipe,
    CookiePolicyPopupComponent,
    AboutUsPopupComponent,
    PrivacyPolicyPopupComponent,
    ResponsibleGamingPopupComponent,
    TermsAndConditionsPopupComponent,
    EditProfilePopupComponent,
    //Start Affiliates-----
    AffiliateComponent,
    HomeComponent,
    InformationComponent,
    EaringInfoComponent,
    LinksAndCreativeInfoComponent,
    AffProgramInfoComponent,
    TermsAndConditionsInfoComponent,
    RestrictionsInfoComponent,
    ContactUsComponent,
    NavbarAffiliateComponent,
    NavbarUpperComponent, LoginAffiliateModalComponent,
    RegisterModalAffiliateComponent,
    SlidersBunnerAffiliateComponent,
    NavbarInformationComponent,
    NavbarUpperAffiliateComponent,
    MessagesPopupComponent,
    AffiliateLoginAppComponent,
    TextFilterPipe,
    WithdrawalPopupComponent,
    ModalComponent,
    //End Affiliates-----
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRouting,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    ClipboardModule,
    NgxCarouselModule,
    SharedModule,
    BootstrapModalModule,
    //TooltipModule,
    BrowserAnimationsModule,
   //ToolTipModule
   NgbModule.forRoot(),
   BsDatepickerModule.forRoot(),
   ModalModule.forRoot(),
  ],
  entryComponents:[
    EditProfilePopupComponent,
    MessagesPopupComponent,
    WithdrawalPopupComponent,
    AboutUsPopupComponent,
    ResponsibleGamingPopupComponent,
    PrivacyPolicyPopupComponent,
    TermsAndConditionsPopupComponent,
    CookiePolicyPopupComponent,
    RegisterModalAffiliateComponent,
    LoginAffiliateModalComponent
  ],
  providers: [
    HttpModule, AffiliateService, UniquePipe, HttpClient,
    ContentPagesService, RegisterService,  
    ContentPagesService, ModalService,
    ContentPagesFAQService,AuthGuard,
    FAQsService, TimezoneService,BsModalRef,
    AlertService, TextFilterPipe, AuthService, AuthInterceptor, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
 // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

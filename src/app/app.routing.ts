import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { MediaComponent } from './media/media.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { FaqComponent } from './faq/faq.component';
import { RevenueReportComponent } from './reports/revenue-report/revenue-report.component';
import { StatementReportComponent } from './reports/statement-report/statement-report.component';
import { SummaryPerSiteReportComponent } from './reports/summary-per-site-report/summary-per-site-report.component';
import { BannersComponent } from './media/banners/banners.component';
import { PixelsComponent } from './media/pixels/pixels.component';
import { AffiliateComponent } from './affiliate/components/affiliate.component';
import { HomeComponent } from './affiliate/components/home/home.component';
import { InformationComponent } from './affiliate/components/information/information.component';
import { EaringInfoComponent } from './affiliate/components/information/earing-info/earing-info.component';
import { LinksAndCreativeInfoComponent } from './affiliate/components/information/links-and-creative-info/links-and-creative-info.component';
import { AffProgramInfoComponent } from './affiliate/components/information/aff-program-info/aff-program-info.component';
import { TermsAndConditionsInfoComponent } from './affiliate/components/information/terms-and-conditions-info/terms-and-conditions-info.component';
import { RestrictionsInfoComponent } from './affiliate/components/information/restrictions-info/restrictions-info.component';
import { ContactUsComponent } from './affiliate/components/contact-us/contact-us.component';
import { AffiliateLoginAppComponent } from './affiliate-login-app/affiliate-login-app.component';
import { AuthGuard } from './shared/affiliate-server/auth.gaurd';




const appRoutes:Routes = [

    { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
// ,canActivate:[AuthGuard]
    { path: 'Login', component: AffiliateLoginAppComponent , children:
            [
                { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
                { path: 'Dashboard', component: DashboardComponent },
                { path: 'Reports', component: ReportsComponent, children:
                        [
                            { path: '', redirectTo: 'RevenueReport', pathMatch: 'full' },
                            { path: 'RevenueReport', component: RevenueReportComponent },
                            { path: 'StatementReport', component: StatementReportComponent },
                            { path: 'SummaryPerSiteReport', component: SummaryPerSiteReportComponent },
                        ]
                },
                { path: 'Commissions', component: CommissionsComponent },
                { path: 'Withdrawals', component: WithdrawalsComponent },
                { path: 'Media', component: MediaComponent, children:
                        [
                            { path: '', redirectTo: 'Banners', pathMatch: 'full' },
                            { path: 'Pixels', component: PixelsComponent },
                            { path: 'Banners', component: BannersComponent },
                        ]
                },
                { path: 'Messages', component: MessagesComponent },
                { path: 'Settings', component: SettingsComponent },
                { path: 'Faq', component: FaqComponent },

            ]
    },
  /*  { path: 'ByAffiliate/:id',component:AffiliateComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            {
                path: 'information', component: InformationComponent, children: [
                    { path: '', redirectTo: 'LinksAndCreative', pathMatch: 'full' },
                    { path: 'Earning', component: EaringInfoComponent },
                    { path: 'LinksAndCreative', component: LinksAndCreativeInfoComponent },
                    { path: 'AffiliateProgram', component: AffProgramInfoComponent },
                    { path: 'TermsAndConditions', component: TermsAndConditionsInfoComponent },
                    { path: 'Restricitions', component: RestrictionsInfoComponent },

                ]
            },
            { path: 'contactUs', component: ContactUsComponent },
        ] },*/
        { path: 'ByAffiliate/:id', component:AffiliateComponent },
    { path: 'Homepage', component: AffiliateComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            {
                path: 'information', component: InformationComponent, children: [
                    { path: '', redirectTo: 'LinksAndCreative', pathMatch: 'full' },
                    { path: 'Earning', component: EaringInfoComponent },
                    { path: 'LinksAndCreative', component: LinksAndCreativeInfoComponent },
                    { path: 'AffiliateProgram', component: AffProgramInfoComponent },
                    { path: 'TermsAndConditions', component: TermsAndConditionsInfoComponent },
                    { path: 'Restricitions', component: RestrictionsInfoComponent },

                ]
            },
            { path: 'contactUs', component: ContactUsComponent },
        ]
    },
]
//}
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouting {}

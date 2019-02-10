import { Time } from "@angular/common";

export class Affiliate {
    ID: number;
    CompanyName: string;
    Phone: string;
    Address1: string;
    Address2: string;
    City: string;
    Country: string;
    State: string;
    ZipCode: string;
    Username: string;
    Password: string;
    Name: string;
    Family: string;
    AffiliateUserID: number;
    Tile: string;
    Email: string;
    RegistrationDate: any;
    Balance: number;
    AffiliateLink: string;
    AffiliateLastLogin: Date;
    LastActivityTime: Date;
    Skype: string;
    AffiliatesBanners: AffiliatesBanners[];
    AffiliateAccount: AffiliateAccount;
    AffiliateMedias: AffiliateMedia[];
    AffiliateRequestWithdrawls: AffilateRequestWithdrawl[];
    AffiliateRevenueReports: AffiliateRevenueReport[];
    AffiliateSummaryPerSites: AffiliateSummaryPerSite;
    AffiliateTickets: AffiliateTicket[];
    AffiliatesCommissions: AffiliateCommission[];
    SubAffiliates: SubAffiliates[];
    AffiliateBankAccount: AffiliateBankAccount;
}

//AffiliateAccount
export class AffiliateAccount {
    ID: number;
    AccountDate: Date;
    Transaction: string;
    Amount: any;
    Balance: any;
}

//AffiliatesBanners
export class AffiliatesBanners {
    ID: number;
    AffiliateBanner:AffiliateBanner;
    AffiliateID: number;
    BannerID: number;
    Clicks: number;
    Impressions: number;
    Lead: number;
    Sale: number;
    SummaryDate: Date;
}

//AffiliateBanner
export class AffiliateBanner {
    ID: number;
    BannerName: string;
    BannerPath: string;
    Javascript: string;
    DirectLink: string;
    HTMLCode: string;
    AffiliateBannerSize: AffiliateBannerSize;
}

export class AffiliateBannerSize {
    
    Width: string;
    Height: string;
}

//AffiliateMedia
export class AffiliateMedia {
    ID: number;
}

//AffiliatePixel
export class AffiliatePixel {
    ID: number;
    Pixel: string;
    PixelTrigger: string;
    Code: string;
}

//AffiliateCommission
export class AffiliateCommission {
    ID: number;
    ProductID: number;
    ProductName: string;
    ProductLink: string;
    Logo: string;
    CostPerLead: any;
    RevenueSharePercentages: any;
    RevenueShareFromAmount: any;
    CostPerAcquisition: any;
    IsActive: boolean;
    AvailableDateFrom: Date;
    AvailableDateTill: Date;
}

//AffiliateRevenueReport todo -primarykey
export class AffiliateRevenueReport {
    ID: number;
    AffiliateDate: Date;
    Visits: number;
    Registrations: number;
    Deposits: number;
    DepositSum: any;
    TurnOver: any;
    Profit: any;
    Players: number;
}

//AffiliateBankAccount
export class AffiliateBankAccount {
    ID: number;
    BankName: string;
    BankAccount: string;
    BankBranch: string;
    BankEmail: string;
    IBAN: string;
    Swift: string;
    AccountName: string;
    AccountNumber: string;
    ComissionPlan: string;
    MinimalPayout: string;
    PayoutCurrency: string;
    NetlleterEmail: string;
    SkrillEmail: string;
    PaymentType: string;
    CompanyName: string;
}

//AffiliateSummaryPerSite
export class AffiliateSummaryPerSite {
    ID: number;
    Product: string;
    Impressions: number;
    Clicks: number;
    Lead: number;
    Sale: number;
    AffiliateSummaryDate: Date;
}

//AffiliateTicket
export class AffiliateTicket {
    ID: number;
    Status: string
    CreatedDate: any;
    CreatedBy: string;
    Subject: string;
    LastResponse: Date;
    Actions: string;
    IsReadByAffiliate: any;
    AffiliateTicketContents: AffiliateTicketContent[];
    AffiliateID: number;
}

// AffiliateTicketContent
export class AffiliateTicketContent {

    ID: number;
    Subject: String;
    Content: String;
    CreatedBy: String;
    CreatedDate: any;
    IsActivateOnCreation: Boolean;
    IsPopupUntilApproval: Boolean;
    IsSendByEmail: Boolean;
    IsReadByAffiliate: boolean;
    TicketID: number;

}

//AffiliateWithdrawlHistory
export class AffiliateWithdrawlHistory {
    ID: number;
    Created: Date;
    Amount: any;
    AmountPayout: any;
    BalanceAfterPayout: any;
    Status: string;
}

//SubAffiliates
export class SubAffiliates {
    ID: number;
    RegistrationDate: any;
    UserName: string;
    URL: string;
}

export class AffilateRequestWithdrawl {
    ID: number;
    RequestDate: any;
    AffiliateID: number;
    Amount: number;
    Status: string;
    BalanceAfterPayout: any;
    RejectedDetails: string;
}

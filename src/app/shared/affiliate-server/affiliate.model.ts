import { Time } from "@angular/common";

export class Affiliate {
    public Id: number;
    public CompanyName: string;
    public Phone: string;
    public Address1: string;
    public Address2: string;
    public City: string;
    public Country: string;
    public State: string;
    public ZipCode: string;
    public Username: string;
    public Password: string;
    public Name: string;
    public Family: string;
    public AffiliateUserID:number;
    public Tile: string;
    public Email: string;
    public RegistrationDate: Date;
    public Balance: number;
    public AffiliateLink: string;
    public AffiliateLastLogin: Date;
    public LastActivityTime:Date;
    public Skype:string;
    
}
    //AffiliateAccount
    export class AffiliateAccount{
    public Id: number;    
    public AccountDate: Date;
    public Transaction: string;
    public Amount: any;
    public Balance: any;
}

    //AffiliateBanner
    export class AffiliateBanner{
    public Id: number;
    public BannerName: string;
    public BannerPath: string;
    public Javascript: string;
    public DirectLink: string;
    public HTMLCode: string;
    public Width: string;
    public Height: string;

    }
    //AffiliateMedia
    export class AffiliateMedia{
    public Id: number;
    }

    //AffiliatePixel
    export class AffiliatePixel{
    public Id: number;
    public Pixel: string;
    public PixelTrigger: string;
    public Code: string;
    }

    //AffiliateCommission
    export class AffiliateCommission{
    public Id: number;
    public ProductID: number;
    public ProductName: string;
    public ProductLink: string;
    public Logo:string;
    public CostPerLead:any;
    public RevenueSharePercentages :any;
    public RevenueShareFromAmount :any;
    public CostPerAcquisition:any;
    public IsActive:boolean;
    public AvailableDateFrom:Date;
    public AvailableDateTill:Date;
    }

    //AffiliateRevenueReport
    export class AffiliateRevenueReport{
    public Id: number;
    public AffiliateDate: Date;
    public Visits: number;
    public Registrations: number;
    public Deposits: number;
    public DepositSum: any;
    public TurnOver: any;
    public Profit: any;
    public Players: number;
    }

    //AffiliateSummaryPerSite
    export class AffiliateSummaryPerSite{
    public Id: number;
    public Product: string;
    public Impressions: number;
    public Clicks: number;
    public Lead: number;
    public Sale: number;
    public AffiliateSummaryDate: Date;
    }

    //AffiliateTicket
export class AffiliateTicket {
    public Id: number;
    public Status: string
    public CreatedDate: Date;
    public CreatedBy: string;
    public Subject: string;
    public LastResponse: Date;
    public Actions: string;
    public IsReadByAffiliate:boolean;
    public MessagesContents: MessagesContents[];
}
export class Ticket {
    public Id: number;
    public Status: string
    public CreatedDate: Date;
    public CreatedBy: string;
    public Subject: string;
    public LastResponse: Date;
    public Actions: string;
    public AffiliateID:number;
    public IsReadByAffiliate:boolean;
}
export class AffiliateNewTicket{
   public Ticket:Ticket;
   public Message:Messages;  
}
export class Messages {

    public Id: number;
    public Subject: String;
    public Content: String;
    public CreatedBy: String;
    public CreatedDate: Date;
    public IsActivateOnCreation: Boolean;
    public IsPopupUntilApproval: Boolean;
    public IsSendByEmail: Boolean;
    public IsReadByAffiliate:boolean;
    public TicketID:number;
    
 }
export class MessagesContents {

   public Id: number;
   public Subject: String;
   public Content: String;
   public CreatedBy: String;
   public CreatedDate: Date;
   public IsActivateOnCreation: Boolean;
   public IsPopupUntilApproval: Boolean;
   public IsSendByEmail: Boolean;
   public IsReadByAffiliate:boolean;
   
}
/*export class AffiliateTicket {
    public Id: number;
    public Status: string
    public CreatedDate: Date;
    public CreatedBy: string;
    public Subject: string;
    public LastResponse: Date;
    public Actions: string;
    public MessagesContents: {
        Id: number;
        Content: String;
        Subject: String;
        CreatedBy: String;
        CreatedDate: Date;
        IsActivateOnCreation: Boolean;
        IsPopupUntilApproval: Boolean;
        IsSendByEmail: Boolean;
    }
} */

    //AffiliateWithdrawlHistory
    export class AffiliateWithdrawlHistory{
    public Id: number;
    public Created: Date;
    public Amount: any;
    public AmountPayout: any;
    public BalanceAfterPayout: any;
    public Status:string;
    }

    //SubAffiliates
    export class SubAffiliates{
    public Id: number;
    public RegistrationDate: Date;
    public UserName: string;
    public URL: string;
    }
    export class AffilateRequestWithdraw{
     public Id:number;
     public RequestDate:Date;
     public AffiliateID:number;
     public Amount:any;
     public Status:string;
     public BalanceAfterPayout:any;
     public RejectedDetails:string;
        }

      








export class MyData {

    public base: {
        CompanyName: string;
        Phone: string;
        Address1: string;
        Address2: string;
        City: string;
        Country: string;
        State: string;
        ZipCode: string;
        Email: string;
    }
    public user: {
        Username: string;
        Password: string;
        Name: string;
        Family: string;
        Tile: string;
        RegistrationDate: Date;
    }
    constructor(

    ) { };

}

export class base {
    public CompanyName: string;
    public Phone: string;
    public Address1: string;
    public Address2: string;
    public City: string;
    public Country: string;
    public State: string;
    public ZipCode: string;
    public Email: string;
}

export class user {
    public Username: string;
    public Password: string;
    public Name: string;
    public Family: string;
    public Tile: string;
    public RegistrationDate: Date;
}

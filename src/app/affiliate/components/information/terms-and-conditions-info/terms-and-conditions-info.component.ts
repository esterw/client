import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentPagesFAQService } from '../../../shared/services/ContentPagesFAQs/ContentPagesFAQs.service';
import { ContentPagesFAQ } from '../../../shared/services/ContentPagesFAQs/ContentPagesFAQs.model';
import { FAQ } from '../../../shared/services/FAQs/FAQs.model';
import { FAQsService } from '../../../shared/services/FAQs/FAQs.service';


@Component({
  selector: 'app-terms-and-conditions-info',
  templateUrl: './terms-and-conditions-info.component.html',
  styleUrls: ['./terms-and-conditions-info.component.css']
})
export class TermsAndConditionsInfoComponent implements OnInit {

  constructor(private contentfAQSService: ContentPagesFAQService,private fAQsService:FAQsService) { }
 
  contentsFAQS: ContentPagesFAQ;
 FAQ: FAQ[];
  content: ContentPagesFAQ;
  subscription: Subscription;
  subscription2: Subscription;
  PrivacyContent: ContentPagesFAQ;
  ngOnInit() {
    this.subscription = this.contentfAQSService.getObservablefAQS().subscribe(
      contents => {
        this.contentsFAQS = contents.filter(content => { return content.Name == "Terms And Conditions" })[0];
      //  this.FAQ = contents.filter(content => { return content.ComContentFAQID == this.contentsFAQS.ID });
      });
    this.subscription2 = this.fAQsService.getObservableFAQ().subscribe(
      contents => {
       this.FAQ = contents.filter(content => { return content.ComContentFAQID ==15 });
      });
      this.contentsFAQS = this.contentfAQSService.contentsFAQs.filter(content => { return content.Name == "Terms And Conditions" })[0];
      this.FAQ =  this.fAQsService.contentsFAQ.filter(content => { return content.ComContentFAQID ==15 });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
}
  

}

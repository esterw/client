import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentPagesFAQ } from '../../../shared/services/ContentPagesFAQs/ContentPagesFAQs.model';
import { ContentPagesFAQService } from '../../../shared/services/ContentPagesFAQs/ContentPagesFAQs.service';
import { FAQ } from '../../../shared/services/FAQs/FAQs.model';
import { FAQsService } from '../../../shared/services/FAQs/FAQs.service';

@Component({
  selector: 'app-restrictions-info',
  templateUrl: './restrictions-info.component.html',
  styleUrls: ['./restrictions-info.component.css']
})
export class RestrictionsInfoComponent implements OnInit {

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
        this.contentsFAQS = contents.filter(content => { return content.Name == "Restrictions" })[0];
      //  this.FAQ = contents.filter(content => { return content.ComContentFAQID == this.contentsFAQS.ID });
      });
    this.subscription2 = this.fAQsService.getObservableFAQ().subscribe(
      contents => {
       this.FAQ = contents.filter(content => { return content.ComContentFAQID ==14 });
      });
      this.contentsFAQS = this.contentfAQSService.contentsFAQs.filter(content => { return content.Name == "Restrictions" })[0];
      this.FAQ =this.fAQsService.contentsFAQ.filter(content => { return content.ComContentFAQID ==14 });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
}

}

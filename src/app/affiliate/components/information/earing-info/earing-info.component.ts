import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ContentPagesFAQService } from '../../../shared/services/ContentPagesFAQs/ContentPagesFAQs.service';
import { FAQsService } from '../../../shared/services/FAQs/FAQs.service';
import { ContentPagesFAQ } from '../../../shared/services/ContentPagesFAQs/ContentPagesFAQs.model';
import { FAQ } from '../../../shared/services/FAQs/FAQs.model';


@Component({
  selector: 'app-earing-info',
  templateUrl: './earing-info.component.html',
  styleUrls: ['./earing-info.component.css']
})
export class EaringInfoComponent implements OnInit {
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
        this.contentsFAQS = contents.filter(content => { return content.Name == "Earing" })[0];
      //  this.FAQ = contents.filter(content => { return content.ComContentFAQID == this.contentsFAQS.Id });
      });
    this.subscription2 = this.fAQsService.getObservableFAQ().subscribe(
      contents => {
       this.FAQ = contents.filter(content => { return content.ComContentFAQID ==12 });
      });
      this.contentsFAQS = this.contentfAQSService.contentsFAQs.filter(content => { return content.Name == "Earing" })[0];
      this.FAQ = this.fAQsService.contentsFAQ.filter(content => { return content.ComContentFAQID ==12 });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
}

}

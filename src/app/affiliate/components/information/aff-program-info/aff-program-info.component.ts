import { Component, OnInit } from '@angular/core';
import { Content } from '../../../../shared/ContentPages/ContentPages.model';
import { Subscription } from 'rxjs';
import { ContentPagesService } from '../../../../shared/ContentPages/ContentPages.service';

@Component({
  selector: 'app-aff-program-info',
  templateUrl: './aff-program-info.component.html',
  styleUrls: ['./aff-program-info.component.css']
})
export class AffProgramInfoComponent implements OnInit {

  constructor(private contentService: ContentPagesService) { }
  contents: Content[];
  content: Content;
  subscription: Subscription;
  ngOnInit() {
    //console.log("content-----------");
    // this.subscription = this.contentService.getObservableBanners().subscribe(
    //   contents => {
    //     this.contents = contents.filter(content => { return content.Group == "affiliate information" });
    //     this.content = this.contents.filter(content => { return content.Name == "information1" })[0];
    //   })
    
    //   this.contents = this.contentService.contents.filter(content => { return content.Group == "affiliate information" });
    //   this.content = this.contents.filter(content => { return content.Name == "information1" })[0];
   
    }
      ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

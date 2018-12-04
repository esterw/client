import { Component, OnInit } from '@angular/core';
import { Content } from '../../../../shared/ContentPages/ContentPages.model';
import { Subscription } from 'rxjs';
import { ContentPagesService } from '../../../../shared/ContentPages/ContentPages.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-terms-and-conditions-popup',
  templateUrl: './terms-and-conditions-popup.component.html',
  styleUrls: ['./terms-and-conditions-popup.component.css','../popups-footer.component.css']
})
export class TermsAndConditionsPopupComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) { }

  contents: Content[];
  content: Content;
  
  ngOnInit() {
  
  }
}

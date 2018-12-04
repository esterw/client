import { Component, OnInit } from '@angular/core';
import { Content } from '../../../../shared/ContentPages/ContentPages.model';
import { ContentPagesService } from '../../../../shared/ContentPages/ContentPages.service';
import { Subscription } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-cookie-policy-popup',
  templateUrl: './cookie-policy-popup.component.html',
  styleUrls: ['./cookie-policy-popup.component.css','../popups-footer.component.css']
})
export class CookiePolicyPopupComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  contents: Content[];
  content: Content;
 
  
  ngOnInit() {
 
  }

}

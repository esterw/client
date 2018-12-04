import { Component, OnInit } from '@angular/core';
import { Content } from '../../../../shared/ContentPages/ContentPages.model';
import { ContentPagesService } from '../../../../shared/ContentPages/ContentPages.service';
import { Subscription } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-about-us-popup',
  templateUrl: './about-us-popup.component.html',
  styleUrls: ['./about-us-popup.component.css','../popups-footer.component.css']
})
export class AboutUsPopupComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  contents: Content[];
  content: Content;
  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Content } from '../../../../shared/ContentPages/ContentPages.model';
import { ContentPagesService } from '../../../../shared/ContentPages/ContentPages.service';
import { Subscription } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-responsible-gaming-popup',
  templateUrl: './responsible-gaming-popup.component.html',
  styleUrls: ['./responsible-gaming-popup.component.css','../popups-footer.component.css']
})
export class ResponsibleGamingPopupComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }
 
  contents: Content[];
  content: Content;
  
  ngOnInit() {
 
  }
}

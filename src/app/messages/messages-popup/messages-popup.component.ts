import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../../shared/services/affiliate.service';
import { BsModalRef } from 'ngx-bootstrap';
import { AffiliateTicket, AffiliateTicketContent } from 'src/app/shared/affiliate-server/affiliate.model';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-messages-popup',
  templateUrl: './messages-popup.component.html',
  styleUrls: ['./messages-popup.component.css']
})
export class MessagesPopupComponent implements OnInit {

  constructor(private service: AffiliateService, public bsModalRef: BsModalRef) { }
  TicketSubject = "";
  TicketContent = "";
  loading=false;
  
  ngOnInit() {
  }

  newTicket() {
    this.loading = true;
    this.service.newTicket(this.TicketSubject).subscribe( (res: AffiliateTicket) => {
      const mssg = new AffiliateTicketContent();
      mssg.TicketID = res.ID;
      mssg.Subject = res.Subject;
      mssg.Content = this.TicketContent;
      mssg.CreatedDate = res.CreatedDate ;
      mssg.CreatedBy = res.CreatedBy;
      
  this.service.addMessage(mssg, res.ID).subscribe(resMsg => {
    
            this.loading = false;
          this.closeModal();
  })
    })
  }

  closeModal() {
    this.bsModalRef.hide();
    this.service.closeTicketModal.next(true);
  }
}

import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../../shared/services/affiliate.service';
import { BsModalRef } from 'ngx-bootstrap';

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
    this.service.newTicket(this.TicketSubject).subscribe(res => {
            this.loading = false;
          this.closeModal();
    })
  }

  closeModal() {
    this.bsModalRef.hide();
    this.service.closeTicketModal.next(true);
  }
}

import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AffiliateService } from '../shared/affiliate-server/affiliate.service';
import { AffiliateTicket, AffiliateTicketContent } from '../shared/affiliate-server/affiliate.model';
import { UniquePipe } from '../shared/shared-pipes/uniquw-pipe.pipe';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessagesPopupComponent } from './messages-popup/messages-popup.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {

  @ViewChild("newMessaggeForm") newMessaggeForm: NgForm;
  DisplayReply = true;
  selectedStatus = "All";
  subscription: Subscription;
  constructor(private modalService: BsModalService, private service: AffiliateService) { }
  tickets: AffiliateTicket[];
  //newTickets:AffiliateTicket=new AffiliateTicket();
  newMessages: AffiliateTicketContent = new AffiliateTicketContent();
  messages;
  bsModalRef: BsModalRef;
  filteredData: AffiliateTicket[];
  ngOnInit() {
    this.subscription = this.service.affiliateChanged.subscribe(affiliate => {
      this.tickets = affiliate.AffiliateTickets;
      this.filteredData = affiliate.AffiliateTickets;
    })
    this.tickets = this.service.affiliate.AffiliateTickets;
    this.filteredData = this.service.affiliate.AffiliateTickets;
    // this.service.closeTicketModal.subscribe((val:boolean)=>this.closeModal());
  }

  openMessagesPopup() {
    this.bsModalRef = this.modalService.show(MessagesPopupComponent);

  }
  // closeModal() {
  //   // this.modalRef.close();
  //   this.bsModalRef.hide();
  // }
  modalRef: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  statusFilterChanged() {
    if (this.selectedStatus == "All")
      this.filteredData = this.tickets;
    else
      this.filteredData = this.tickets.filter(item => item.Status == this.selectedStatus);
  }

  onRead(ticketID, index: number) {
    this.DisplayReply = true;
    if (this.tickets[index].IsReadByAffiliate == false)
      this.service.updateTicketIsRead(ticketID);
    // this.newMessaggeForm.reset();
    this.newMessages.Subject = "";
    this.newMessages.Content = "";
  }

  loading = false;

  newMessagge(ticketID: number) {

    this.loading = true;
    this.service.addMessage(this.newMessages, ticketID)
    .subscribe((responseJson) => {
      // this.newMessaggeForm.reset();
      this.newMessages.Subject="";
      this.newMessages.Content="";
     this.loading = false;
     this.DisplayReply=true;
    }
      , error => {
        this.loading = false;
        //this.message = "server is not available ):";ן
      }

    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

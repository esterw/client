import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/modal-service/modal.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-pixels',
  templateUrl: './pixels.component.html',
  styleUrls: ['./pixels.component.css']
})
export class PixelsComponent implements OnInit {

  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
    constructor(private modalService: ModalService) {
      this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.bsRangeValue = [this.bsValue, this.maxDate];
    
    }
    bsConfig: Partial<BsDatepickerConfig>;
    colorTheme = 'theme-default';
    daterangepickerModel: Date[];
    ngOnInit() {
      this.bsConfig = Object.assign({}, { containerClass: this.colorTheme});




      this.dpConfig.containerClass = 'theme-default';
      let objJsonStr = JSON.stringify(this.body);
      //this.objJsonB64 = Buffer.from(objJsonStr).toString("base64");
      this.encoded = btoa(JSON.stringify(this.body));

    }
  objJsonB64;
  encoded;
  log(){
    console.log(this.daterangepickerModel);
  }
  body = {
    "id": "155",
    "username": "esterW"
  };
 
   bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();


 
  applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.show();
    });
  }

}

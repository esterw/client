import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'TextFilterPipe',
    pure: false
  })
  export class TextFilterPipe implements PipeTransform {
      filteredItems:any[];
    transform(items: any[], args: any[]): any {
       
        //console.log("*******args*************/////////"+args.toString)
      if(args.toString().length === 0)
        return items;
        this.filteredItems=items.filter(item => item.AffiliateDate == args );
        //console.log("----------------------filtered"+items)
      return this.filteredItems;
    }
  }
  //&& item.AffiliateDate.getFullYear() == args[1].getFullYear() 
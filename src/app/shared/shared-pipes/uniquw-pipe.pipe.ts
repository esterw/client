import { Injectable, Pipe, PipeTransform } from "@angular/core";

declare var _: any; // lodash, not strictly typed

@Pipe({
    name: 'uniqFilter',
    pure: false
})
@Injectable()
    export class UniquePipe implements PipeTransform {
        transform(items: any[], args: any[]): any {

        // lodash uniqBy function
        return _.uniqBy(items, args);
    }
}
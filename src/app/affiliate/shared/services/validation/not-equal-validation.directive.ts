import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS,Validator,
         Validators,AbstractControl,ValidatorFn } from '@angular/forms';
 
@Directive({
    selector: '[validateNotEqual][formControlName],[validateNotEqual][formControl],[validateNotEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => NotEqualValidator), multi: true }
    ]
})
export class NotEqualValidator implements Validator {
    constructor( @Attribute('validateNotEqual') public validateNotEqual: string,  @Attribute('notEqualReverse') public notEqualReverse: string) {}
 
    private get isReverse() {
        if (!this.notEqualReverse) return false;
        return this.notEqualReverse === 'true' ? true: false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        let v = c.value;

        // control vlaue
        let e = c.root.get(this.validateNotEqual);

        // value not equal
        if (e && v === e.value && !this.isReverse) {
          return {
            validateNotEqual: false
          }
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            //delete e.errors['validateNotEqual'];
           // if (!Object.keys(e.errors).length) e.setErrors(null);
        }
        
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            e.setErrors({
                validateNotEqual: false
            })
               //  e.setErrors( { validateUniqeUsername: true } );
        }


        return null;
    }
}
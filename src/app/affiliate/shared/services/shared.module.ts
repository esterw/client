import { NgModule } from '@angular/core';

import { EqualValidator } from './validation/password-validation.directive';
import { NotEqualValidator } from './validation/not-equal-validation.directive';

@NgModule({
    declarations: [
        EqualValidator,
        NotEqualValidator,
    ],
    exports: [
        EqualValidator,
        NotEqualValidator,
    ]
})
export class SharedModule{}

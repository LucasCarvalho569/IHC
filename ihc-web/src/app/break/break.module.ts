import { BreakComponent } from './break.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BreakRoutingModule } from './break.routing';

@NgModule({
    declarations: [
        BreakComponent
    ],
    imports: [ 
        CommonModule,
        BreakRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    providers: [

    ],
})
export class BreakModule {}
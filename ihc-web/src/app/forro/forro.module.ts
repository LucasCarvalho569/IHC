import { ForroRoutingModule } from './forro.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForroComponent } from './forro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ForroComponent
    ],
    imports: [ 
        CommonModule,
        ForroRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    providers: [

    ],
})
export class ForroModule {}
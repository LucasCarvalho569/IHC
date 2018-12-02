import { ForroRoutingModule } from './forro.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForroComponent } from './forro.component';

@NgModule({
    declarations: [
        ForroComponent
    ],
    imports: [ 
        CommonModule,
        ForroRoutingModule
    ],
    exports: [
    ],
    providers: [

    ],
})
export class ForroModule {}
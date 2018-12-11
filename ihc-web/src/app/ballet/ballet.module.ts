
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BalletComponent } from './ballet.component';
import { BalletRoutingModule } from './ballet.routing';

@NgModule({
    declarations: [
        BalletComponent
    ],
    imports: [ 
        CommonModule,
        BalletRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    providers: [

    ],
})
export class BalletModule {}
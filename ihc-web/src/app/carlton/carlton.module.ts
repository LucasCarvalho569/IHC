
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CarltonComponent } from './carlton.component';
import { CarltonRoutingModule } from './carlton.routing';

@NgModule({
    declarations: [
        CarltonComponent
    ],
    imports: [ 
        CommonModule,
        CarltonRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    providers: [

    ],
})
export class CarltonModule {}
import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ForroComponent } from '../forro/forro.component';
import { ForroModule } from '../forro/forro.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [ 
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        ForroModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
})

export class HomeModule {}
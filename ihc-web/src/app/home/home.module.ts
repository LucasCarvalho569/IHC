import { HomeRoutingModule } from './home.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [ 
        CommonModule,
        HomeRoutingModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
})

export class HomeModule {}
import { AnimacaoModule } from './../animacao/animacao.module';
import { CarltonModule } from './../carlton/carlton.module';
import { BalletModule } from './../ballet/ballet.module';
import { BreakModule } from './../break/break.module';
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
        ForroModule,
        BreakModule,
        BalletModule,
        CarltonModule,
        AnimacaoModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
})

export class HomeModule {}
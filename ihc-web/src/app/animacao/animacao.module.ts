
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AnimacaoComponent } from './animacao.component';
import { AnimacaoRoutingModule } from './animacao.routing';

@NgModule({
    declarations: [
        AnimacaoComponent
    ],
    imports: [ 
        CommonModule,
        AnimacaoRoutingModule,
        SharedModule
    ],
    exports: [
    ],
    providers: [

    ],
})
export class AnimacaoModule {}
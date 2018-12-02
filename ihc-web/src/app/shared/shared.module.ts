import { CardComponent } from './card/card.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [ 
        CommonModule
    ],
    exports: [
        CardComponent
    ],
    providers: [

    ],
})
export class SharedModule {}
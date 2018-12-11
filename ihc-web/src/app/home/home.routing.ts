import { AnimacaoComponent } from './../animacao/animacao.component';
import { CarltonComponent } from './../carlton/carlton.component';
import { BalletComponent } from './../ballet/ballet.component';
import { BreakComponent } from './../break/break.component';
import { HomeModule } from './home.module';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForroComponent } from '../forro/forro.component';


const routes: Routes = [
     { path: 'forro', component: ForroComponent },
     { path: 'breakdance', component: BreakComponent },
     { path: 'ballet', component: BalletComponent },
     { path: 'carlton', component: CarltonComponent },
     { path: 'animacao', component: AnimacaoComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}

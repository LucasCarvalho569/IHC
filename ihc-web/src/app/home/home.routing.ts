import { HomeModule } from './home.module';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForroComponent } from '../forro/forro.component';


const routes: Routes = [
     { path: 'forro', component: ForroComponent },
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

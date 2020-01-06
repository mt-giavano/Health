import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AilmentsComponent } from '../ailments/ailments.component';

const routes: Routes = [
    { path: 'ailments/:id', component: AilmentsComponent}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})

export class AilmentsRoutingModule {

}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AilmentsRoutingModule } from './ailments-routing.module';
import { AilmentsComponent } from './ailments.component';


@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, AilmentsRoutingModule ],
    declarations: [ AilmentsComponent ]
})
export class AilmentsModule { }

// @NgModule({
//     imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule ],
//     declarations: [ OrdersComponent ]
// })
// export class OrdersModule { }
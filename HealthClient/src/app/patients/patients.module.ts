import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PatientsComponent }  from './patients.component';
import { PatientsListComponent }  from './patients-list/patients-list.component';
import { FilterTextboxComponent } from './patients-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { PatientsRoutingModule } from './patients-routing.module';

@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, PatientsRoutingModule ],
  declarations: [ PatientsComponent , PatientsListComponent, FilterTextboxComponent ],
  exports : [ PatientsComponent ]
})
export class PatientsModule { }
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsComponent }  from './patients.component';
import { PatientsListComponent }  from './patients-list/patients-list.component';
import { FilterTextboxComponent } from './patients-list/filter-textbox.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PatientsComponent , PatientsListComponent, FilterTextboxComponent ],
  exports : [ PatientsComponent ]
})
export class PatientsModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PatientsModule } from './patients/patients.module';
import { SharedModule } from './patients/shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, PatientsModule, SharedModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

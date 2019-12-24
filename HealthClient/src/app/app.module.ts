import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module'
import { PatientsModule } from './patients/patients.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AilmentsModule } from './ailments/ailments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule, PatientsModule, SharedModule, AppRoutingModule, 
    AilmentsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

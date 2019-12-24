import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module'
import { PatientsModule } from './patients/patients.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CoreModule, PatientsModule, SharedModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

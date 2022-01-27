import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import {HttpClientModule} from '@angular/common/http';
import { SumaPipe } from './pipes/suma.pipe';
import { PatientNamePipe } from './pipes/patient-name.pipe';
import { MalesPipe } from './pipes/males.pipe';
import { AboutComponent } from './views/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { AddPatientComponent } from './view/add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPatientComponent } from './views/edit-patient/edit-patient.component';
;


@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    SumaPipe,
    PatientNamePipe,
    MalesPipe,
    AboutComponent,
    HeaderComponent,
    PatientFormComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { DiagnosticosFormComponent } from './components/diagnosticos-form/diagnosticos-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'
import {MatInputModule} from '@angular/material/input'
;
;

import { PrimaryButtonComponent } from './components/basic/buttons/primary-button/primary-button.component';


;


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
    EditPatientComponent,
    DiagnosticosFormComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

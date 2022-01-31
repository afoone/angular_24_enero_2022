import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosticosFormComponent } from './components/diagnosticos-form/diagnosticos-form.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { AddPatientComponent } from './view/add-patient/add-patient.component';
import { AboutComponent } from './views/about/about.component';
import { EditPatientComponent } from './views/edit-patient/edit-patient.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patients/list',
    pathMatch: 'full',
  },
  {
    path: 'patients/list',
    component: PatientsListComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'patients/new', component: AddPatientComponent },
  { path: 'diagnosticos/new', component: DiagnosticosFormComponent },
  {path: 'patients/:id', component: EditPatientComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

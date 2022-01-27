import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path: 'patients/:id', component: EditPatientComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

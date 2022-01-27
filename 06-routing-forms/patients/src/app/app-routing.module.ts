import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { AddPatientComponent } from './view/add-patient/add-patient.component';
import { AboutComponent } from './views/about/about.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

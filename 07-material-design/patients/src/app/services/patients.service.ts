import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

import {environment} from 'src/environments/environment';
;


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  // public patients: Patient[] = []

  // getPatients() {
  //   return this.patients
  // }

  // fetchPatients() {
  //   this._http.get<Patient[]>('http://localhost:3000/patients').subscribe(
  //     data => this.patients = data
  //   )
  // }

  constructor(private _http: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this._http.get<Patient[]>(environment.baseUrl+'/patients')
  }

  // obtener un sólo paciente
  getPatient = (id:number): Observable<Patient> => {
    return this._http.get<Patient>(environment.baseUrl + `/patients/${id}`)
  }

  // add Patient
  addPatient = (patient: Patient) : Observable<Patient> =>{
    return this._http.post<Patient>(environment.baseUrl + '/patients', patient)
  }

  // delete patient
  deletePatient = (id: number): Observable<{}> => {
    return this._http.delete<{}>(environment.baseUrl + `/patients/${id}`)
  }


  // update
  updatePatient = (patient: Patient): Observable<Patient> => {
    return this._http.put<Patient>(environment.baseUrl + `/patients/${patient.id}`, patient)
  }
}

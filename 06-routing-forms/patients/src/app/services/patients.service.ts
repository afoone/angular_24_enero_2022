import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

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
    return this._http.get<Patient[]>('http://localhost:3000/patients')
  }

  // obtener un sólo paciente
  getPatient = (id:number): Observable<Patient> => {
    return this._http.get<Patient>(`http://localhost:3000/patients/${id}`)
  }

  // add Patient
  addPatient = (patient: Patient) : Observable<Patient> =>{
    return this._http.post<Patient>('http://localhost:3000/patients', patient)
  }

  // delete patient
  deletePatient = (id: number): Observable<{}> => {
    return this._http.delete<{}>(`http://localhost:3000/patients/${id}`)
  }


  // update
  updatePatient = (patient: Patient): Observable<Patient> => {
    return this._http.put<Patient>(`http://localhost:3000/patients/${patient.id}`, patient)
  }
}

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
}

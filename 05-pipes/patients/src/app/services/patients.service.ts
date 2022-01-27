import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private _http: HttpClient) {
  }

  getPatients(): Observable<Patient[]> {
    return this._http.get<Patient[]>('http://localhost:3000/patients')
  }
}

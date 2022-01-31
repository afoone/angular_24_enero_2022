import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostic } from '../models/diagnostic';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticsService {

  constructor(private _http: HttpClient) {

   }

   addDiagnostic(diagnostic: Diagnostic): Observable<Diagnostic> {
     return this._http.post<Diagnostic>('http://localhost:3000/diagnostics', diagnostic)
   }
}

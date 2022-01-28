import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'patiens-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent implements OnInit {
  public patient: Patient;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _patientsService: PatientsService
  ) {
    this.patient = {
      'name': ''
    }
  }

  ngOnInit(): void {
    this._route.params.subscribe(({ id }) =>
      this._patientsService
        .getPatient(id)
        .subscribe((patient) => (this.patient = patient))
    );
  }

  backToList = () => {
    this._router.navigate(['patients/list']);
  };
}

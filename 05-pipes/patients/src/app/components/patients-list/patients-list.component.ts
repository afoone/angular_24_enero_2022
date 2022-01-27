import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'patiens-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  public patients: Array<Patient>
  public date = new Date()

  constructor(private _patientService: PatientsService) {
    this.patients = []
  }

  ngOnInit(): void {
    this._patientService.getPatients().subscribe(
      datos => this.patients = datos
    )
  }

}

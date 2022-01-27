import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';


@Component({
  selector: 'patiens-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  public patient: Patient;

  @Output('finish')
  public finish: EventEmitter<undefined> = new EventEmitter()

  constructor(private _patientService: PatientsService) {
    this.patient = {
      name: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._patientService.addPatient(this.patient).subscribe(
      ()=> {
        this.finish.emit()
      }
    )
  }

}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientsService } from 'src/app/services/patients.service';


@Component({
  selector: 'patiens-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
  animations: [
    trigger('buttonAnimation',
    [
      transition('*=>*', animate('1s')),
      state(
        'enabled',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(600px)'
        })
      ),
      state(
        'disabled',
        style({
          backgroundColor: 'grey'
        })
      )

    ])
  ]
})
export class PatientFormComponent implements OnInit {

  @Input('patient')
  public patient: Patient

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
    if (this.patient.id) {
      this._patientService.updatePatient(this.patient).subscribe(
        () => {
          this.finish.emit()
        }
      )
    } else {
      this._patientService.addPatient(this.patient).subscribe(
        ()=> {
          this.finish.emit()
        }
      )
    }


  }

  back() {
    this.finish.emit()
  }

}

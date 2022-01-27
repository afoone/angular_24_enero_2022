import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'patiens-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
      params => console.log(params)
    )
   }

  ngOnInit(): void {
  }

}

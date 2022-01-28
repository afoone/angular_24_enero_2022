import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Diagnostic } from 'src/app/models/diagnostic';
import { DiagnosticsService } from 'src/app/services/diagnostics.service';

const diagPrueba: Diagnostic = {
  code: "100",
  description: "LUPUS"
}

@Component({
  selector: 'patiens-diagnosticos-form',
  templateUrl: './diagnosticos-form.component.html',
  styleUrls: ['./diagnosticos-form.component.css']
})
export class DiagnosticosFormComponent implements OnInit {

  public diagnosticoForm: FormGroup
  public showErrors = false

  constructor(private _fb: FormBuilder, private _diagnosticsService: DiagnosticsService) {

    this.diagnosticoForm = _fb.group(
      {
        code: ['', [Validators.required, Validators.maxLength(3)]],
        description: ['', Validators.required],
        severity: this._fb.group(
          {
            code: [''],
            value: ['']
          }
        )
      }
    )
  }

  ngOnInit(): void {
    this.diagnosticoForm.setValue(
      diagPrueba
    )
    this.diagnosticoForm.patchValue({
      description: "DIABETES"
    })
  }

  submit() {
    console.log("submitted",this.diagnosticoForm)
    if (this.diagnosticoForm.invalid) {
      alert("los campos tienen errores")
      this.showErrors = true
      console.log(this.diagnosticoForm.errors)
      return
    }
    this._diagnosticsService.addDiagnostic(this.diagnosticoForm.value).subscribe()
  }

}

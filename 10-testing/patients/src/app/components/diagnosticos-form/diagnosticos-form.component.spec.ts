import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DiagnosticosFormComponent } from './diagnosticos-form.component';

describe('DiagnosticosFormComponent', () => {
  let component: DiagnosticosFormComponent;
  let fixture: ComponentFixture<DiagnosticosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticosFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

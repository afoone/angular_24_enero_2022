import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticosFormComponent } from './diagnosticos-form.component';

describe('DiagnosticosFormComponent', () => {
  let component: DiagnosticosFormComponent;
  let fixture: ComponentFixture<DiagnosticosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PatientsService } from './patients.service';

describe('PatientsService', () => {
  let service: PatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

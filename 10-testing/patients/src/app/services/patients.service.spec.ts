import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Patient } from '../models/patient';

import { PatientsService } from './patients.service';

describe('PatientsService', () => {
  let service: PatientsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // configuramos el módulo
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    // inyectamos el servicio
    service = TestBed.inject(PatientsService);
    // vamos a hacer un mock y lo vamos a inyectar
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sucessfully get patients', async () => {

    // definimos lo que quermos que devuelva
    const patientData: Patient[] = [
      {
        id: 1,
        name: 'Joe Smith',
        sex: 'M',
        age: 54,
        diagnostics: ['malaria'],
      },
      {
        id: 2,
        name: 'Susan Smith',
        sex: 'F',
        age: 54,
        diagnostics: ['covid19', 'malaria'],
      },
    ];

    // suscribirme a los cambios
    service.getPatients().subscribe((res) => {
      console.log('RESPUESTA HTTP', res);
      expect(res).toHaveSize(2);
      expect(res).toEqual(patientData)
    });

    // genero una mockrequest
    const patientRequest = httpMock.expectOne('http://localhost:3000/patients')

    // enviar la respuesta, que es capturada en la suscripción anterior
    patientRequest.flush(patientData)


  });
});

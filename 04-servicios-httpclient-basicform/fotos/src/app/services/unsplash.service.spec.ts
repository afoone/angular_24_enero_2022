import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UnsplashService } from './unsplash.service';

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('recupera  fotos', () => {
    service.getFotos('madrid').subscribe({
      next: (fotos) => {
        console.log('total fotos', fotos.total);
        fotos.results.forEach((foto) => {
          console.log(foto.description, foto.alt_description);
        });
        expect(fotos).toBeTruthy();
      },
      error: (err) => expect(err).toBeFalsy(),
      complete: ()=> console.log("se ha completado")
    });
  });
});

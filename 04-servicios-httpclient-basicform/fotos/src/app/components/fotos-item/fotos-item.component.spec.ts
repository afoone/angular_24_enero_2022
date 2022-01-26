import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosItemComponent } from './fotos-item.component';

describe('FotosItemComponent', () => {
  let component: FotosItemComponent;
  let fixture: ComponentFixture<FotosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

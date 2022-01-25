import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptorComponent } from './interruptor.component';

describe('InterruptorComponent', () => {
  let component: InterruptorComponent;
  let fixture: ComponentFixture<InterruptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterruptorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dummy test', () => {
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect('').toBeFalsy();
    expect(0).toBeFalsy();
    // expect(0).toBe(false)
    expect({}).toBeTruthy();
    expect([]).toBeTruthy();
    expect(undefined).toBeFalsy();
  });

  it('la luz al empezar debe estar apagada', () => {
    const compiled = fixture.nativeElement as HTMLElement
    // console.log('nativeelement', compiled)
     // console.log(compiled.querySelector('div')?.textContent)
    expect(compiled.querySelector('div')?.textContent).toContain('off')
  });

  it('al darle click la primera vez la luz se enciende', () => {
    const compiled = fixture.nativeElement as HTMLElement
    compiled.querySelector('button')?.click()
    fixture.detectChanges()
    expect(compiled.querySelector('div')?.textContent).toContain('on')
  });

  it('si la luz estaba encendida, al darle click se apaga', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.luz = "on"
    compiled.querySelector('button')?.click()
    fixture.detectChanges()
    expect(compiled.querySelector('div')?.textContent).toContain('off')
  });

  it('si la luz estaba apagada, al darle click se enciende', () => {
    const compiled = fixture.nativeElement as HTMLElement
    component.luz = "off"
    compiled.querySelector('button')?.click()
    fixture.detectChanges()
    expect(compiled.querySelector('div')?.textContent).toContain('on')
  });
});

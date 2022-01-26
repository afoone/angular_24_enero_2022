import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[imaginaSubrayado]'
})
export class SubrayadoDirective implements OnInit {

  @Input('imaginaSubrayado')
  color: string | undefined = 'green'

  private _el: ElementRef;

  constructor(_el: ElementRef) {
    console.log("estoy en el constructor", _el, this.color)
    this._el = _el
  }

  ngOnInit(): void {
    console.log('estoy en el oninit', this.color)
    this._el.nativeElement.style.backgroundColor = this.color
    this._el.nativeElement.innerText = this._el.nativeElement.innerText.toUpperCase()
  }

}

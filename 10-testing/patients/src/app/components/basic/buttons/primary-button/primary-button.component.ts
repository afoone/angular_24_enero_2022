import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'primary-button',
  template: `
    <button mat-raised-button color="primary">{{value}}</button>
  `
})
export class PrimaryButtonComponent implements OnInit {

  @Input('value')
  public value: string;

  constructor() {
    this.value = ""
   }

  ngOnInit(): void {
  }

}

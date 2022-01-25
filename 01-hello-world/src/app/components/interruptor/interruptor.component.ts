import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interruptor',
  templateUrl: './interruptor.component.html',
  styleUrls: ['./interruptor.component.css'],
})
export class InterruptorComponent implements OnInit {
  public luz: string;

  constructor() {
    this.luz = 'off';
  }

  toggle() {
    this.luz = this.luz === 'off' ? 'on' : 'off';
  }

  ngOnInit(): void {}
}

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-test',
  templateUrl: './animation-test.component.html',
  styleUrls: ['./animation-test.component.css'],
  animations: [
    trigger('open-close', [
      // transition('open=>close', animate('0.5s')),
      // transition('close=>open', animate('1.5s')),
      // transition('*=>close', animate('1s')),
      // transition('*=>open', animate('0.3s')),
      transition('open<=>close', animate('0.6s 0ms ease-out')),
      state(
        'open',
        style({
          padding: '0.3rem',
          opacity: 1,
          backgroundColor: 'yellow',
          transform: 'translateX(100px)',
        })
      ),

      state(
        'close',
        style({
          padding: '1.2rem',
          opacity: 0.5,
          backgroundColor: 'blue',
          transform: 'translateX(200px)',
        })
      ),
    ]),
  ],
})
export class AnimationTestComponent implements OnInit {
  public open: boolean;

  constructor() {
    this.open = false;
  }

  toggle() {
    this.open = !this.open;
  }

  ngOnInit(): void {}
}

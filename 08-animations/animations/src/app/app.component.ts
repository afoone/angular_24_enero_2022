import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public verComponente : boolean

  constructor() {
    this.verComponente = false
  }

  toggle() {
    this.verComponente = !this.verComponente
  }
}

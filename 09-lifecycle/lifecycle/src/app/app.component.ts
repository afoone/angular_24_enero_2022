import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public show  = false

  public text = ""

  toggle() {
    this.show = !this.show
  }
}

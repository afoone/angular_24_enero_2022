import { Component } from '@angular/core';

@Component({
  selector: 'fotos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public search: string;

  constructor() {
    this.search = ""
  }

  onSearch(search: string) {
    this.search = search
  }
}

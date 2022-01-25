import { Component } from '@angular/core';

@Component({
  selector: 'imagina-title',
  template: `
   <h1>{{ title }}</h1>
  `,
  // interpolation: ["**", "**"]
})
export class TitleComponent {
  title: string = 'Mi titulo en variable';
}

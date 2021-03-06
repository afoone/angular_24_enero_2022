import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubrayadoDirective } from './directives/subrayado.directive';
import { LoremDirective } from './directives/subrayado.directive copy';

@NgModule({
  declarations: [
    AppComponent,
    SubrayadoDirective,
    LoremDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

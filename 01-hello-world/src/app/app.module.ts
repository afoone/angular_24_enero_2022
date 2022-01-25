import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocheComponent } from './components/coche-object/coche.component';
import {TitleComponent} from './components/title.component';
import { InterruptorComponent } from './components/interruptor/interruptor.component'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CocheComponent,
    InterruptorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

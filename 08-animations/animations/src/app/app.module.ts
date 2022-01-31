import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationTestComponent } from './components/animation-test/animation-test.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
;


@NgModule({
  declarations: [
    AppComponent,
    AnimationTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

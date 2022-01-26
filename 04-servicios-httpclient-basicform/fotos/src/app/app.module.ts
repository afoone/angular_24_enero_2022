import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FotosListComponent } from './components/fotos-list/fotos-list.component';
import { FotosItemComponent } from './components/fotos-item/fotos-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FotosListComponent,
    FotosItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

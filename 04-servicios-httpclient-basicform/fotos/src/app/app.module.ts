import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FotosListComponent } from './components/fotos-list/fotos-list.component';
import { FotosItemComponent } from './components/fotos-item/fotos-item.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { CompComponent } from './comp/comp.component';
import { PrimaryButtonComponent } from './components/basic/primary-button/primary-button.component';


@NgModule({
  declarations: [
    AppComponent,
    FotosListComponent,
    FotosItemComponent,
    SearchComponent,
    CompComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

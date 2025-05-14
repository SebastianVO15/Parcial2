import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PaisModule} from './pais/pais.module';
import { HttpClientModule } from '@angular/common/http';
import { PaisComponent } from "./pais/pais.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     PaisModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

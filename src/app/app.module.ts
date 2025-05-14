import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ParcialModule} from './parcial/parcial.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ParcialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { GeocacheResponseComponent } from './geocache-response/geocache-response.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GeocacheResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

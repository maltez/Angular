import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberComponent } from "./number.component";
import { OperationComponent } from "./operation.component";
import { DisplayComponent } from "./display.component";

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    OperationComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

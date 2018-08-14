import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberButtonComponent } from './number-button/number-button.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberButtonComponent,
    ActionButtonComponent,
    ResultScreenComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

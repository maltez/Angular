import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberKeyboardComponent } from './number-keyboard/number-keyboard.component';
import {FormsModule} from "@angular/forms";
import { CalculationPanelComponent } from './calculation-panel/calculation-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberKeyboardComponent,
    CalculationPanelComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApesModule } from './Apes/apes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ApesModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

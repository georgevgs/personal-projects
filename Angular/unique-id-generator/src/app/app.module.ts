import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArithmosGeneratorComponent } from './arithmos-generator/arithmos-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    ArithmosGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

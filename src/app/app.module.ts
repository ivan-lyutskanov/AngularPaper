import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasDrawComponent } from './components/canvas-draw/canvas-draw.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasDrawComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

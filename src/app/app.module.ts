import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CalciatoriComponent } from './calciatori/calciatori.component';
import { PiedeComponent } from './piede/piede.component';
import { CalciatorePreviewComponent } from './calciatore-preview/calciatore-preview.component';
import { CalciatoreDetailComponent } from './calciatore-detail/calciatore-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CalciatoriComponent,
    PiedeComponent,
    CalciatorePreviewComponent,
    CalciatoreDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

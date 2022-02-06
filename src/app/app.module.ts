import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteControlComponent } from './control/auto-complete-value-accessor'
import { FlickeringDirective } from './directive/flickering.directive';

import { IframeComponent } from './iframe/iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteControlComponent,
    FlickeringDirective,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

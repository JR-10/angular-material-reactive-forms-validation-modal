import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';


import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  declarations: [AppComponent, FormsComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
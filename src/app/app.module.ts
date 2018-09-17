import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatCardModule, MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { SignupFormTemplatedComponent } from './signup-form-templated/signup-form-templated.component';
import { SignupFormReactiveComponent } from './signup-form-reactive/signup-form-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormTemplatedComponent,
    SignupFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

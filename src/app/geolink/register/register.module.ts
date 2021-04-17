import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule, ReactiveFormsModule]
})
export class RegisterModule { }

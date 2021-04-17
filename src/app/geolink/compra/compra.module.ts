import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './compra.component';


@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule
  ]
})
export class CompraModule { }

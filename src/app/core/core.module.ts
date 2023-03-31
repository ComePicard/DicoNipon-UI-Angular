import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule { }

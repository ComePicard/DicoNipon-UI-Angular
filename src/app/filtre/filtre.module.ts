import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminaisonComponent } from './terminaison/terminaison.component';
import { FiltresOptionsComponent } from './filtres-options/filtres-options.component';



@NgModule({
  declarations: [
    TerminaisonComponent,
    FiltresOptionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FiltreModule { }

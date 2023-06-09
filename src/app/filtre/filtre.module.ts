import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TerminaisonComponent} from './terminaison/terminaison.component';
import {FiltresOptionsComponent} from './filtres-options/filtres-options.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TerminaisonComponent,
    FiltresOptionsComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    TerminaisonComponent,
    FiltresOptionsComponent
  ]
})
export class FiltreModule {
}

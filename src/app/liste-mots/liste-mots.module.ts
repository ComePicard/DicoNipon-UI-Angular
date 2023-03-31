import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeMotsComponent } from './liste-mots/liste-mots.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ListeMotsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    ListeMotsComponent
  ]
})
export class ListeMotsModule { }

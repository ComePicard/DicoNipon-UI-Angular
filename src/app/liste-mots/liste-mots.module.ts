import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeMotsComponent } from './liste-mots/liste-mots.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListeMotsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    ListeMotsComponent
  ]
})
export class ListeMotsModule { }

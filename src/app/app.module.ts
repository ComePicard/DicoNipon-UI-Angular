import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ListeMotsModule} from './liste-mots/liste-mots.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FiltreModule} from "./filtre/filtre.module";
import { DictionnaireComponent } from './dictionnaire/dictionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionnaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ListeMotsModule,
    FiltreModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

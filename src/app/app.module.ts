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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EntrainementComponent } from './entrainement/entrainement.component';
import { BaptisteBlandetComponent } from './baptiste-blandet/baptiste-blandet.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionnaireComponent,
    PageNotFoundComponent,
    EntrainementComponent,
    BaptisteBlandetComponent,
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

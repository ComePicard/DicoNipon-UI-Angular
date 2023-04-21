import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionnaireComponent } from './dictionnaire/dictionnaire.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EntrainementComponent } from './entrainement/entrainement.component';

const routes: Routes = [
  { path: 'dictionnaire', component: DictionnaireComponent },
  { path: '', redirectTo: 'dictionnaire', pathMatch: 'full' },
  { path: 'entrainement', component: EntrainementComponent },
  { path: '**', component:  PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

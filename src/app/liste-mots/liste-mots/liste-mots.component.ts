import { Component, Injectable } from '@angular/core';
import { MotsService } from 'src/app/shared/services/mots.service';

enum type_enum {
  Nom_commun = "Nom commun",
  Verbe = "Verbe",
  Adjectif = "Adjectif"
};

export interface Mot{
  id_mot?: number;
  id_kanji_to_kana?: number;
  mot_kanji?: string;
  mot_hiragana?: string;
  mot_katakana?: string;
  traduction?: string;
  type?: type_enum;
  categorie?: string;
  groupe?: number;
}

@Component({
  selector: 'app-liste-mots',
  templateUrl: './liste-mots.component.html',
  styleUrls: ['./liste-mots.component.css']
})
export class ListeMotsComponent {
  displayedColumns: string[] = ['mot_kanji', 'mot_hiragana', 'mot_katakana', 'traduction', 'type', 'categorie', 'groupe'];

  dataSource: Mot[] = [];

  constructor(private motService: MotsService){
    motService.getMots().subscribe({
      complete() {
      },
      error(err) {
      },
      next: value => this.dataSource = value
    });
  }

}

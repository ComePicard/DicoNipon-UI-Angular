import { Component } from '@angular/core';

enum type_enum {
  Nom_commun = "Nom commun",
  Verbe = "Verbe",
  Adjectif = "Adjectif"
};

export interface Mot{
  kanji?: string;
  hirargana?: string;
  katakana?: string;
  traduction?: string;
  type?: type_enum;
  categorie?: string;
  groupe?: number;
}

const ELEMENT_DATA: Mot[] = [
  { kanji: "人", hirargana: "ひと", katakana: "ニン", traduction: "La personne", type: type_enum.Nom_commun, categorie: "Global"},
  { kanji: "猫", hirargana: "ねこ", traduction: "Le chat", type: type_enum.Nom_commun, categorie: "Animal domestique"},
  { kanji: "犬", hirargana: "いぬ", traduction: "Le chien", type: type_enum.Nom_commun, categorie: "Animal domestique"},
  { kanji: "山", hirargana: "やま", katakana: "サン", traduction: "La montagne", type: type_enum.Nom_commun, categorie: "Global"},
  { kanji: "食べる", hirargana: "たべる", traduction: "Manger", type: type_enum.Verbe, groupe: 2},
];

@Component({
  selector: 'app-liste-mots',
  templateUrl: './liste-mots.component.html',
  styleUrls: ['./liste-mots.component.css']
})

export class ListeMotsComponent {
  displayedColumns: string[] = ['kanji', 'hiragana', 'katakana', 'traduction', 'type', 'categorie', 'groupe'];
  dataSource = ELEMENT_DATA;

  constructor(){
  }
}

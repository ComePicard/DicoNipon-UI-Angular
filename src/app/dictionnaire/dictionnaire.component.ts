import { Component } from '@angular/core';

@Component({
  selector: 'app-dictionnaire',
  templateUrl: './dictionnaire.component.html',
  styleUrls: ['./dictionnaire.component.css']
})
export class DictionnaireComponent {
  title = 'Dictionnaire';
  terminaison: string = "";
  type: string = "Tous";
  groupe: string = "Tous";
  categorie: string = "Tous";

  setTerminaison(terminaison: string) {
    this.terminaison = terminaison;
  }

  setType(type: string): void {
    this.type = type;
  }

  setGroupe(groupe: string): void {
    this.groupe = groupe;
  }

  setCategorie(categorie: string): void {
    this.categorie = categorie;
  }
}

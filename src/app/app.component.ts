import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
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

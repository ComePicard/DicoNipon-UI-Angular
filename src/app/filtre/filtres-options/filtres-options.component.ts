import {Component, EventEmitter, Output} from '@angular/core';
import {CategoriesService} from 'src/app/shared/services/categories.service';

export interface Categorie {
  id_categorie: number;
  nom_categorie: String;
}

@Component({
  selector: 'app-filtres-options',
  templateUrl: './filtres-options.component.html',
  styleUrls: ['./filtres-options.component.css']
})
export class FiltresOptionsComponent {
  types: string[] = [
    "Tous",
    "Nom commun",
    "Verbe",
    "Adverbe"
  ];

  groupes: (string | number)[] = [
    "Tous",
    1,
    2,
    3,
  ];
  baseCategorie: Categorie = {id_categorie: 0, nom_categorie: "Tous"}
  categories: Categorie[] = [];

  selectedType: string = "Tous";
  selectedGroupe: string | number = "Tous";
  selectedCategorie: string = "Tous";

  @Output() typeSend = new EventEmitter<string>();
  @Output() groupeSend = new EventEmitter<string>();
  @Output() categorieSend = new EventEmitter<string>();

  constructor(private categorieService: CategoriesService) {
    categorieService.getCategories().subscribe({
      complete() {
      },
      error(err) {
      },
      next: value => {
        this.categories = value;
        this.categories.unshift(this.baseCategorie)
      }
    })
  }

  sendType(): void {
    this.typeSend.emit(this.selectedType);
  }

  sendGroupe(): void {
    // @ts-ignore
    this.groupeSend.emit(this.selectedGroupe);
  }

  sendCategorie(): void {
    this.categorieSend.emit(this.selectedCategorie);
  }
}

import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';

export interface Categorie{
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
    "Nom commun",
    "Verbe",
    "Adverbe"
  ];

  groupes: number[] = [
    1,
    2,
    3
  ];

  categories: Categorie[] = [];

  constructor(private categorieService: CategoriesService){
    categorieService.getCategories().subscribe({
      complete(){},
      error(err){},
      next: value => this.categories = value
    })
  }
}

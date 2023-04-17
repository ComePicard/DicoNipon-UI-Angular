import {Component} from '@angular/core';

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

  categories: string[] = [
    "Global",
    "Animal domestique",
    "Animal sauvage",
    "Appareil domestique"
  ];
}

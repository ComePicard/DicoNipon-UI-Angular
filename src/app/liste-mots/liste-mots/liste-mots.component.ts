import {Component, Input} from '@angular/core';
import {MotsService} from 'src/app/shared/services/mots.service';

enum type_enum {
  TOUS = "TOUS",
  NOM_COMMUN = "nom_commun",
  VERBE = "Verbe",
  ADJECTIF = "Adjectif"
}

export interface Mot {
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
  @Input() terminaison: string = "";
  @Input() type: string = "Tous";
  @Input() groupe: string = "Tous";
  @Input() categorie: string = "Tous";


  dataSource: Mot[] = [];

  constructor(public motService: MotsService) {
    motService.getMots().subscribe({
      complete(): void {
      },
      error(err): void {
        console.error(err.message)
      },
      next: value => this.dataSource = value
    });
  }

  ngOnChanges(): void {
    if (
      this.terminaison !== ""
      || this.type !== "Tous"
      || this.groupe !== "Tous"
    ) {
      this.type = this.motService.to_valid_type(this.type);
      this.motService.filtreListeMot(this.type, this.groupe, this.categorie, this.terminaison).subscribe({
        complete(): void {
        },
        error(err): void {
        },
        next: value => this.dataSource = value
      })
    } else {
      this.motService.getMots().subscribe({
        complete(): void {
        },
        error(err): void {
          console.error(err.message)
        },
        next: value => this.dataSource = value
      });
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-terminaison',
  templateUrl: './terminaison.component.html',
  styleUrls: ['./terminaison.component.css']
})
export class TerminaisonComponent {
  terminaison: String = "";

  getTerminaison(){
    console.log(this.terminaison);
  }
}

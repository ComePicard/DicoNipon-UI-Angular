import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-terminaison',
  templateUrl: './terminaison.component.html',
  styleUrls: ['./terminaison.component.css']
})
export class TerminaisonComponent {
  @Output() terminaisonSent = new EventEmitter<string>();
  stock_terminaison: string = ""

  sendTerminaison(terminaison: string): void {
    this.stock_terminaison = this.stock_terminaison === terminaison ? "" : terminaison;
    this.terminaisonSent.emit(this.stock_terminaison);
  }
}

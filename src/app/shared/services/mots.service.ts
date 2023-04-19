import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mot } from 'src/app/liste-mots/liste-mots/liste-mots.component';

const url: String = "http://localhost:8000/"

@Injectable({
  providedIn: 'root'
})

export class MotsService {

  constructor(private http: HttpClient) {}

  getMots(): Observable<Mot[]> {
   return this.http.get<Mot[]>(url+"liste_mots");
  }

  getMotsTerminaison(terminaison: String): Observable<Mot[]> {
    return this.http.get<Mot[]>(url+"mots_terminaison/"+terminaison);
  }

}

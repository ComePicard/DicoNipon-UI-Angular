import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Mot} from 'src/app/liste-mots/liste-mots/liste-mots.component';

const url: String = "http://localhost:8000/"

@Injectable({
  providedIn: 'root'
})

export class MotsService {

  constructor(private http: HttpClient) {
  }

  filtreListeMot(type: string, groupe: string, categorie: string, terminaison: string | null): Observable<Mot[]> {
    terminaison = terminaison === "" ? null : terminaison;
    return this.http.get<Mot[]>(url + "mots_filtre/" + type + "/" + groupe + "/" + terminaison);
  }

  getMots(): Observable<Mot[]> {
    return this.http.get<Mot[]>(url + "liste_mots");
  }

  getMotsTerminaison(terminaison: string): Observable<Mot[]> {
    return this.http.get<Mot[]>(url + "mots_terminaison/" + terminaison);
  }

  getMotsType(type: string): Observable<Mot[]> {
    return this.http.get<Mot[]>(url + "mots_type/" + type);
  }

  getMotsGroupe(groupe: string): Observable<Mot[]> {
    return this.http.get<Mot[]>(url + "mots_groupe/" + groupe);
  }
}

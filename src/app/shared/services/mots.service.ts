import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mot } from 'src/app/liste-mots/liste-mots/liste-mots.component';

@Injectable({
  providedIn: 'root'
})
export class MotsService {

  constructor(private http: HttpClient) {}

  getMots(): Observable<Mot[]> {
   return this.http.get<Mot[]>("http://localhost:8000/liste_mots");
  }

}

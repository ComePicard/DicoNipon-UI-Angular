import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/filtre/filtres-options/filtres-options.component';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
   return this.http.get<Categorie[]>("http://localhost:8000/liste_categories");
  }

}

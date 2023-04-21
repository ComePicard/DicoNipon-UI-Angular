import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface User{
  nom: string;
  prenom: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class BaptisteGuardGuard implements CanActivate {
  current_user: User = {
    prenom: "John",
    nom: "Doe",
    age: 42
  }

  // current_user: User = {
  //   prenom: "Baptiste",
  //   nom: "Blandet",
  //   age: 62
  // }

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.current_user.prenom==="Baptiste" && this.current_user.nom==="Blandet"){
        return true;
      }
      else {
        this.router.navigate(['/404']);
        return false;
      }
  }

}

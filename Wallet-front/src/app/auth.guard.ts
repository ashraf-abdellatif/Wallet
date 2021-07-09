import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }
  canActivate(): boolean  {
    console.log(Boolean(localStorage.getItem('isAdmin')));
    if (Boolean(localStorage.getItem('isAdmin')) == true) {
    return true;
    }
    this.router.navigate(['']);
    return false;
  }
}

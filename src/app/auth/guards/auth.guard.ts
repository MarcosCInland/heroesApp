import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.auth.id) {
      return true;
    }
    return false;
  }
  canLoad( //Sirve para prevenir que el usuario cargue el modulo
    route: Route,
    segments: UrlSegment[]) : Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.auth.id) {
      return true;
    }
    return false;
  }
  
}

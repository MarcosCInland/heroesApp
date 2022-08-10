import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate');
    return this.authService.verificarAuth()
           .pipe(
            tap( auth => {
              if (!auth) {
                this.router.navigate(['./auth/login']);
              }
            })
           );
    /*if (this.authService.auth.id) {
      return true;
    }
    return false;*/
  }
  canLoad( //Sirve para prevenir que el usuario cargue el modulo
    route: Route,
    segments: UrlSegment[]) : Observable<boolean> | Promise<boolean> | boolean {
    console.log('canLoad');

    return this.authService.verificarAuth()
          .pipe(
            tap( auth => {
              if (!auth) {
                this.router.navigate(['./auth/login']);
              }
            })
          );
    /*if (this.authService.auth.id) {
      return true;
    }
    return false;*/
  }
  
}

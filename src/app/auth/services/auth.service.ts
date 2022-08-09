import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth!: Auth;

  constructor(private http: HttpClient) { }

  get auth(): Auth {
    return {...this._auth}; //Se destructura para evitar modificaciones directas a la propiedad
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe( tap( (resp:Auth) => this._auth = resp) ) //TAP: Antes de pasar por el subscribe que estan en los componentes, pasa por el tap
  }
}

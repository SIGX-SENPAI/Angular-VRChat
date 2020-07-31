import { Injectable, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyCmVzslAhB70qP6pdqMQTJXvLO--k_XNIY';
  private userToken;
  constructor( private http: HttpClient) { }

  logout() {
    localStorage.removeItem('token');
  }

  login( user: UserModel ) {
    const authData = {
      ...user,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}signInWithPassword?key=${this.apikey}`, authData).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      }
      )
    );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let hoy = new Date();
    hoy.setSeconds( 3600 );
    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
    return false;
    }
    const expira =  Number (localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime( expira );

    if ( expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserI } from '../models/interface';
import {catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public db_url : string = 'http://localhost:3000/users';

  constructor(private http : HttpClient) { }

  getUsers() {
    return this.http.get(this.db_url);
  }

  register(user: UserI){
    return this.http.post(`${this.db_url}`, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  handleError(error: HttpErrorResponse){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return throwError(() => error.error.message);
  }

  logOut() {
    //
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map , catchError } from 'rxjs/operators';

import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  public loggedIn;

  constructor( private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
   }

   public get userValue(): User {
    return this.userSubject.value;
}

login(userLog): Observable<User> {
      this.loggedIn = true;
    return this.http.post<User>('https://localhost:44392/auth/authenticate', JSON.stringify(userLog))
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
          //  this.user = user;
          //  this.userSubject.next(user);
            return user;
        }),
        catchError(this.errorHandler));
}

logout() {
  this.loggedIn = false;
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['user/login']);
         }

         errorHandler(error) {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          console.log(errorMessage);
          return throwError(errorMessage);
        }
}




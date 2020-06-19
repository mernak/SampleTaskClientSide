import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trainer } from '../Models/trainer';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  getTrainer(Id: number): Observable<Trainer> {
    return this.http.get<Trainer>('https://localhost:44392/trainer/' + 1)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getTrainers(): Observable<Trainer[]>{
    return this.http.get<Trainer[]>('https://localhost:44392/trainer')
    .pipe(
      catchError(this.errorHandler)
    );
  }
  updateTrainer( Id: number, updatedTrainer): Observable<Trainer> {
    return this.http.put<Trainer>('https://localhost:44392/trainer/' + Id, JSON.stringify(updatedTrainer), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
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

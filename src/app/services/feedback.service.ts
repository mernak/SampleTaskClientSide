import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../Models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

getfeedbacks(): Observable<Feedback[]>{
  return this.http.get<Feedback[]>('https://localhost:44392/feedback');
}
createFeedback(feedback): Observable<Feedback> {
  return this.http.post<Feedback>('https://localhost:44392/feedback/', JSON.stringify(feedback), this.httpOptions);
}
}

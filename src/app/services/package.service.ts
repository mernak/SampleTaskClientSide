import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Package } from '../Models/package';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

getPackages(): Observable<Package[]>{
  return this.http.get<Package[]>('https://localhost:44392/package')
  .pipe(
    catchError(this.errorHandler)
  );
}
createPackage(newPackage): Observable<Package> {
  console.log(JSON.stringify(newPackage))
  return this.http.post<Package>('https://localhost:44392/package/', JSON.stringify(newPackage), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  );
}

deletePackage(packageId: number): Observable<Package> {
  return this.http.delete<Package>('https://localhost:44392/package/' + packageId)
  .pipe(
    catchError(this.errorHandler)
  );
}

updatePackage( packageId: number, updatedPackage): Observable<Package> {
  return this.http.put<Package>('https://localhost:44392/package/' + packageId, JSON.stringify(updatedPackage), this.httpOptions)
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



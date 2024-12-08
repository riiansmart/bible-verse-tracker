import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BibleVerseService {

  private apiUrl = 'http://localhost:3000/api/verses'; // Ensure the backend URL is correct

  constructor(private http: HttpClient) { }

  // Get all Bible verses
  getAllVerses(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a single Bible verse by ID
  getVerseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new Bible verse
  createVerse(verse: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, verse).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing Bible verse
  updateVerse(id: number, verse: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, verse).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a Bible verse
  deleteVerse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Basic error handling for API requests
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error); // Log to console (or show an alert)
    throw new Error(error); // Rethrow the error to be handled by the caller
  }
}

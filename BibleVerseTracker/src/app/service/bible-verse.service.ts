import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibleVerseService {

  private apiUrl = 'http://localhost:3000/api/verses'; // Update with API URL

  constructor(private http: HttpClient) { }

  // Get all Bible verses
  getAllVerses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get a single Bible verse by ID
  getVerseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new Bible verse
  createVerse(verse: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, verse);
  }

  // Update an existing Bible verse
  updateVerse(id: number, verse: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, verse);
  }

  // Delete a Bible verse
  deleteVerse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

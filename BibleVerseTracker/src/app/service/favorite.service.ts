import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://localhost:3000/favorites';  // Update with your API URL

  constructor(private http: HttpClient) {}

  // Get all favorite Bible verses
  getFavorites(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add a Bible verse to favorites
  addFavorite(verseId: number): Observable<any> {
    return this.http.post(this.apiUrl, { verseId });
  }

  // Remove a Bible verse from favorites
  removeFavorite(verseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${verseId}`);
  }
}

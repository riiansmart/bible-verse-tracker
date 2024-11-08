import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../service/favorite.service';
import { BibleVerseService } from '../service/bible-verse.service';  

@Component({
  selector: 'app-favorite',
  standalone: false,
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteVerses: any[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private bibleVerseService: BibleVerseService  // Service to get Bible verse details
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  // Load favorite Bible verses
  loadFavorites(): void {
    this.favoriteService.getFavorites().subscribe((data) => {
      this.favoriteVerses = data;
    });
  }

  // Add a Bible verse to favorites
  addFavorite(verseId: number): void {
    this.favoriteService.addFavorite(verseId).subscribe(() => {
      this.loadFavorites();  // Refresh favorite verses
    });
  }

  // Remove a Bible verse from favorites
  removeFavorite(verseId: number): void {
    this.favoriteService.removeFavorite(verseId).subscribe(() => {
      this.loadFavorites();  // Refresh favorite verses
    });
  }
}

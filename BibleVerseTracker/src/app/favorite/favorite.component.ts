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
  isLoading = true;  // Flag for loading state
  errorMessage: string | null = null;  // To store any errors
  successMessage: string | null = null; // For success message

  constructor(
    private favoriteService: FavoriteService,
    private bibleVerseService: BibleVerseService  // Service to get Bible verse details
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  // Load favorite Bible verses
  loadFavorites(): void {
    this.isLoading = true;
    this.favoriteService.getFavorites().subscribe(
      (data) => {
        this.favoriteVerses = data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to load favorite verses. Please try again later.';
        console.error('Error loading favorites:', error);
      }
    );
  }

  // Add a Bible verse to favorites
  addFavorite(verseId: number): void {
    this.favoriteService.addFavorite(verseId).subscribe(
      () => {
        this.successMessage = 'Verse added to favorites!';
        this.loadFavorites();  // Refresh favorite verses after adding
      },
      (error) => {
        this.errorMessage = 'Failed to add verse to favorites. Please try again later.';
        console.error('Error adding verse to favorites:', error);
      }
    );
  }

  // Remove a Bible verse from favorites
  removeFavorite(verseId: number): void {
    this.favoriteService.removeFavorite(verseId).subscribe(
      () => {
        this.successMessage = 'Verse removed from favorites!';
        this.favoriteVerses = this.favoriteVerses.filter(verse => verse.verseId !== verseId);  // Optimistic UI update
      },
      (error) => {
        this.errorMessage = 'Failed to remove verse from favorites. Please try again later.';
        console.error('Error removing verse from favorites:', error);
      }
    );
  }
}

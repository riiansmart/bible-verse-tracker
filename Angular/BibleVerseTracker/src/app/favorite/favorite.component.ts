import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../service/favorite.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-favorite',
  standalone: false,
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteVerses: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private favoriteService: FavoriteService,
    private router: Router  // Inject Router
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

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
      }
    );
  }

  addFavorite(verseId: number): void {
    this.favoriteService.addFavorite(verseId).subscribe(
      () => {
        this.successMessage = 'Verse added to favorites!';
        this.loadFavorites();
      },
      (error) => {
        this.errorMessage = 'Failed to add verse to favorites. Please try again later.';
      }
    );
  }

  removeFavorite(verseId: number): void {
    this.favoriteService.removeFavorite(verseId).subscribe(
      () => {
        this.successMessage = 'Verse removed from favorites!';
        this.favoriteVerses = this.favoriteVerses.filter(verse => verse.verseId !== verseId);
      },
      (error) => {
        this.errorMessage = 'Failed to remove verse from favorites. Please try again later.';
      }
    );
  }

  // Navigate to the "View Favorites" page
  viewFavorites(): void {
    this.router.navigate(['/favorites']);  // Navigate to the '/favorites' route
  }
}

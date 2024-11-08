import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibleVerseService } from './service/bible-verse.service';
import { FavoriteService } from './service/favorite.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  verses: any[] = [];
  filteredVerses: any[] = [];
  filterText: string = '';  // For storing the input filter text
  selectedVerse: any = null; // To store selected verse
  showFilter: boolean = false; // Initializes showFilter to false to keep the filter input hidden initially

  constructor(
    private bibleVerseService: BibleVerseService,
    private favoriteService: FavoriteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBibleVerses();  // Load the verses when component is initialized
  }

  // Load all Bible verses from the API
  loadBibleVerses(): void {
    this.bibleVerseService.getAllVerses().subscribe((data) => {
      this.verses = data;
      this.filteredVerses = data; // Initialize with all verses
    });
  }

  // Add a verse to favorites
  addToFavorites(verse: any): void {
    this.favoriteService.addFavorite(verse).subscribe((response) => {
      alert('Verse added to favorites!');
    });
  }

  // Show the verse text when clicked
  showVerseText(verse: any): void {
    this.selectedVerse = verse;
  }

  // Filter verses by book name
  filterVerses(): void {
    if (this.filterText) {
      this.filteredVerses = this.verses.filter((verse) =>
        verse.book.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      this.filteredVerses = this.verses;  // Reset filter
    }
  }

  // Navigate to View Favorites page
  viewFavorites(): void {
    this.router.navigate(['/favorites']);  // Navigates to the favorites component
  }

  goToCreateBibleVerse(): void {
    this.router.navigate(['/bible-verse-create']); // Navigates to the 'bible-verse-create' component
  }

  // Navigate to Edit Selected Verse page
  editVerse(): void {
    if (this.selectedVerse) {
      this.router.navigate(['/bible-verse-update', this.selectedVerse.verseId]); // Navigates to the update page with verseId as a parameter
    } else {
      alert('Please select a verse to edit.');
    }
  }

  // Delete the selected verse
  deleteVerse(): void {
    if (this.selectedVerse) {
      this.bibleVerseService.deleteVerse(this.selectedVerse.verseId).subscribe(() => {
        alert('Verse deleted!');
        this.loadBibleVerses();  // Reload the verses
      });
    } else {
      alert('Please select a verse to delete.');
    }
  }
}

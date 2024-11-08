import { Component, OnInit } from '@angular/core';
import { BibleVerseService } from '../service/bible-verse.service';

@Component({
  selector: 'app-bible-verse-list',
  standalone: false,
  templateUrl: './bible-verse-list.component.html',
  styleUrls: ['./bible-verse-list.component.scss']
})
export class BibleVerseListComponent implements OnInit {
  verses: any[] = [];
  errorMessage: string | null = null;  // Store error message
  isLoading = true;  // Track loading state

  constructor(private bibleVerseService: BibleVerseService) { }

  ngOnInit(): void {
    this.loadBibleVerses();
  }

  // Load all Bible verses
  loadBibleVerses(): void {
    this.bibleVerseService.getAllVerses().subscribe(
      (data) => {
        this.verses = data;
        this.isLoading = false; // Set loading to false after data is loaded
        this.errorMessage = null; // Reset error message on successful load
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to load Bible verses. Please try again later.';
        console.error('Error loading Bible verses:', error);
      }
    );
  }

  // Delete a verse with confirmation
  deleteVerse(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this verse?');
    if (confirmation) {
      this.bibleVerseService.deleteVerse(id).subscribe(
        () => {
          this.verses = this.verses.filter(verse => verse.id !== id);  // Remove deleted verse from the list
        },
        (error) => {
          this.errorMessage = 'Failed to delete the Bible verse. Please try again later.';
          console.error('Error deleting Bible verse:', error);
        }
      );
    }
  }
}

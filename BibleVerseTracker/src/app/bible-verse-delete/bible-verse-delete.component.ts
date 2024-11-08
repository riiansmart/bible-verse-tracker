import { Component, OnInit } from '@angular/core';
import { BibleVerseService } from '../service/bible-verse.service'; 

@Component({
  selector: 'app-bible-verse-delete',
  standalone: false,
  templateUrl: './bible-verse-delete.component.html',
  styleUrls: ['./bible-verse-delete.component.scss']
})
export class BibleVerseDeleteComponent implements OnInit {
  verses: any[] = [];  // To store the list of verses from the database
  selectedVerseId: number | null = null;  // To store the id of the selected verse
  errorMessage: string | null = null; // To store error message if any occurs during the API call

  constructor(private bibleVerseService: BibleVerseService) {}

  ngOnInit(): void {
    this.loadBibleVerses();  // Load the Bible verses on component init
  }

  // Load all Bible verses
  loadBibleVerses(): void {
    this.bibleVerseService.getAllVerses().subscribe(
      (data) => {
        this.verses = data;
        this.errorMessage = null; // Reset error message if the load is successful
      },
      (error) => {
        this.errorMessage = 'Failed to load Bible verses. Please try again later.';
        console.error('Error loading Bible verses:', error);
      }
    );
  }

  // Handle delete request with confirmation
  deleteBibleVerse(): void {
    if (this.selectedVerseId) {
      const confirmation = confirm('Are you sure you want to delete this verse?');
      if (confirmation) {
        this.bibleVerseService.deleteVerse(this.selectedVerseId).subscribe(
          () => {
            this.loadBibleVerses();  // Reload the verses after deletion
            this.selectedVerseId = null;  // Deselect the verse after deletion
            this.errorMessage = null; // Reset error message on successful deletion
          },
          (error) => {
            this.errorMessage = 'Failed to delete the Bible verse. Please try again later.';
            console.error('Error deleting Bible verse:', error);
          }
        );
      }
    }
  }

  // Handle selection of a verse
  selectVerse(verseId: number): void {
    this.selectedVerseId = verseId;
  }
}

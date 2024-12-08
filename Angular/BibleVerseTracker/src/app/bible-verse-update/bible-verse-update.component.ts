import { Component, OnInit } from '@angular/core';
import { BibleVerseService } from '../service/bible-verse.service';

@Component({
  selector: 'app-bible-verse-update',
  templateUrl: './bible-verse-update.component.html',
  styleUrls: ['./bible-verse-update.component.scss']
})
export class BibleVerseUpdateComponent implements OnInit {
  bibleVerses: any[] = [];
  selectedVerse: any = null; // Holds the verse being edited
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private bibleVerseService: BibleVerseService) {}

  ngOnInit(): void {
    this.loadBibleVerses();
  }

  loadBibleVerses(): void {
    this.bibleVerseService.getAllVerses().subscribe(
      data => {
        this.bibleVerses = data;
      },
      error => {
        this.errorMessage = 'Failed to load Bible verses. Please try again later.';
        console.error('Error loading verses:', error);
      }
    );
  }

  loadVerseForEditing(verse: any): void {
    this.selectedVerse = { ...verse }; // Copy to avoid direct reference
  }

  updateVerse(): void {
    if (!this.selectedVerse) return;

    this.bibleVerseService.updateVerse(this.selectedVerse.verseId, this.selectedVerse).subscribe(
      () => {
        this.successMessage = 'Verse updated successfully!';
        this.loadBibleVerses(); // Reload verses to reflect updates
        this.selectedVerse = null; // Clear form after update
      },
      error => {
        this.errorMessage = 'Failed to update the Bible verse. Please try again later.';
        console.error('Error updating verse:', error);
      }
    );
  }
}
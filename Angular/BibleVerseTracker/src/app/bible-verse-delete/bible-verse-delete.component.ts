import { Component, OnInit } from '@angular/core';
import { BibleVerseService } from '../service/bible-verse.service';

@Component({
  selector: 'app-bible-verse-delete',
  templateUrl: './bible-verse-delete.component.html',
  styleUrls: ['./bible-verse-delete.component.scss']
})
export class BibleVerseDeleteComponent implements OnInit {
  verses: any[] = [];
  errorMessage: string | null = null;

  constructor(private bibleVerseService: BibleVerseService) {}

  ngOnInit(): void {
    this.loadBibleVerses();
  }

  // Load all Bible verses
  loadBibleVerses(): void {
    this.bibleVerseService.getAllVerses().subscribe(
      (data) => {
        this.verses = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load Bible verses. Please try again later.';
        console.error('Error loading Bible verses:', error);
      }
    );
  }

  // Handle delete request with confirmation
  confirmDelete(verseId: number): void {
    const confirmation = confirm('Are you sure you want to delete this verse?');
    if (confirmation) {
      this.bibleVerseService.deleteVerse(verseId).subscribe(
        () => {
          this.verses = this.verses.filter(verse => verse.verseId !== verseId);
        },
        (error) => {
          this.errorMessage = 'Failed to delete the Bible verse. Please try again later.';
          console.error('Error deleting Bible verse:', error);
        }
      );
    }
  }
}

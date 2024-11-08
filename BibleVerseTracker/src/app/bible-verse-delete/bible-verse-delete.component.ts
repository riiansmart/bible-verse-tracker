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

  constructor(private bibleVerseService: BibleVerseService) {}

  ngOnInit(): void {
    this.loadBibleVerses();  // Load the Bible verses on component init
  }

  // Load all Bible verses
  loadBibleVerses(): void {
    this.bibleVerseService.getAllVerses().subscribe((data) => {
      this.verses = data;
    });
  }

  // Handle delete request
  deleteBibleVerse(): void {
    if (this.selectedVerseId) {
      this.bibleVerseService.deleteVerse(this.selectedVerseId).subscribe(() => {
        this.loadBibleVerses();  // Reload the verses after deletion
      });
    }
  }

  // Handle selection of a verse
  selectVerse(verseId: number): void {
    this.selectedVerseId = verseId;
  }
}

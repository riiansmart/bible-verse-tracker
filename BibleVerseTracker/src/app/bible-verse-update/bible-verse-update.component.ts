import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleVerseService } from '../service/bible-verse.service';

@Component({
  selector: 'app-bible-verse-update',
  standalone: false,
  templateUrl: './bible-verse-update.component.html',
  styleUrls: ['./bible-verse-update.component.scss']
})
export class BibleVerseUpdateComponent implements OnInit {
  verse: any = { book: '', chapter: 0, verseNumber: 0, verseText: '' };
  isLoading = true;  // Flag for loading state
  errorMessage: string | null = null;  // To store any errors
  successMessage: string | null = null; // For success message

  constructor(
    private bibleVerseService: BibleVerseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bibleVerseService.getVerseById(id).subscribe(
      data => {
        this.verse = data;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = 'Failed to load the Bible verse. Please try again later.';
        console.error('Error loading verse:', error);
      }
    );
  }

  updateVerse(): void {
    if (!this.verse.book || !this.verse.chapter || !this.verse.verseNumber || !this.verse.verseText) {
      return;  // Ensure no empty fields are submitted
    }

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bibleVerseService.updateVerse(id, this.verse).subscribe(
      () => {
        this.successMessage = 'Verse updated successfully!';
        setTimeout(() => {
          this.router.navigate(['/bible-verse-list']);
        }, 2000);  // Redirect after 2 seconds
      },
      error => {
        this.errorMessage = 'Failed to update the Bible verse. Please try again later.';
        console.error('Error updating verse:', error);
      }
    );
  }
}

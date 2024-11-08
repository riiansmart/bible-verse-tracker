import { Component } from '@angular/core';
import { BibleVerseService } from '../service/bible-verse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bible-verse-create',
  standalone: false,
  templateUrl: './bible-verse-create.component.html',
  styleUrls: ['./bible-verse-create.component.scss']
})
export class BibleVerseCreateComponent {
  newVerse = {
    book: '',
    chapter: 0,
    verseNumber: 0,
    verseText: ''
  };

  constructor(private bibleVerseService: BibleVerseService, private router: Router) { }

  createVerse(): void {
    this.bibleVerseService.createVerse(this.newVerse).subscribe(() => {
      this.router.navigate(['/bible-verse-list']);
    });
  }
}

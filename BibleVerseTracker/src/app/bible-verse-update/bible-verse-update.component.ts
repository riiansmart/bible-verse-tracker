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

  constructor(
    private bibleVerseService: BibleVerseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bibleVerseService.getVerseById(id).subscribe(data => {
      this.verse = data;
    });
  }

  updateVerse(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bibleVerseService.updateVerse(id, this.verse).subscribe(() => {
      this.router.navigate(['/bible-verse-list']);
    });
  }
}

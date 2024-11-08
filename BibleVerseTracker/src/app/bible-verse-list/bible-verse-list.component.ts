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

  constructor(private bibleVerseService: BibleVerseService) { }

  ngOnInit(): void {
    this.bibleVerseService.getAllVerses().subscribe((data) => {
      this.verses = data;
    });
  }

  deleteVerse(id: number): void {
    this.bibleVerseService.deleteVerse(id).subscribe(() => {
      this.verses = this.verses.filter(verse => verse.id !== id);
    });
  }
}

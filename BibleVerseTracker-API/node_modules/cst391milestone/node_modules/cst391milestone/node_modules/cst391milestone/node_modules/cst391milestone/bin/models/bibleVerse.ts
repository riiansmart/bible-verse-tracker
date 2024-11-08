export class BibleVerse {
    verseId?: number;
    book: string;
    chapter: number;
    verseNumber: number;
    verseText: string;
    dateAdded: Date;
  
    constructor(book: string, chapter: number, verseNumber: number, verseText: string) {
      this.book = book;
      this.chapter = chapter;
      this.verseNumber = verseNumber;
      this.verseText = verseText;
      this.dateAdded = new Date();
    }
  }
  
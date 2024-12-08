export class Favorite {
    favoriteId?: number;
    verseId: number;
    dateFavorited: Date;
  
    constructor(verseId: number) {
      this.verseId = verseId;
      this.dateFavorited = new Date();
    }
  }
  
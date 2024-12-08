import { TestBed } from '@angular/core/testing';

import { BibleVerseService } from '../service/bible-verse.service';

describe('BibleVerseService', () => {
  let service: BibleVerseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleVerseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleVerseListComponent } from './bible-verse-list.component';

describe('BibleVerseListComponent', () => {
  let component: BibleVerseListComponent;
  let fixture: ComponentFixture<BibleVerseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibleVerseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleVerseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

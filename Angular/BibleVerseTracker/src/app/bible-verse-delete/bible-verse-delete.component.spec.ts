import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleVerseDeleteComponent } from './bible-verse-delete.component';

describe('BibleVerseDeleteComponent', () => {
  let component: BibleVerseDeleteComponent;
  let fixture: ComponentFixture<BibleVerseDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibleVerseDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleVerseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleVerseUpdateComponent } from './bible-verse-update.component';

describe('BibleVerseUpdateComponent', () => {
  let component: BibleVerseUpdateComponent;
  let fixture: ComponentFixture<BibleVerseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibleVerseUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleVerseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

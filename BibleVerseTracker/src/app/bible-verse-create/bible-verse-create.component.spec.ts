import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleVerseCreateComponent } from './bible-verse-create.component';

describe('BibleVerseCreateComponent', () => {
  let component: BibleVerseCreateComponent;
  let fixture: ComponentFixture<BibleVerseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibleVerseCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibleVerseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

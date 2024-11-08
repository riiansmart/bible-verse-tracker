import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibleVerseListComponent } from './bible-verse-list/bible-verse-list.component';
import { BibleVerseCreateComponent } from './bible-verse-create/bible-verse-create.component';
import { BibleVerseUpdateComponent } from './bible-verse-update/bible-verse-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BibleVerseListComponent,
    BibleVerseCreateComponent,
    BibleVerseUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

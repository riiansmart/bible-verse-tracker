import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibleVerseListComponent } from './bible-verse-list/bible-verse-list.component';
import { BibleVerseCreateComponent } from './bible-verse-create/bible-verse-create.component';
import { BibleVerseUpdateComponent } from './bible-verse-update/bible-verse-update.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BibleVerseDeleteComponent } from './bible-verse-delete/bible-verse-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BibleVerseListComponent,
    BibleVerseCreateComponent,
    BibleVerseUpdateComponent,
    FavoriteComponent,
    BibleVerseDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

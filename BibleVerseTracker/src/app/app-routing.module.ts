import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibleVerseListComponent } from './bible-verse-list/bible-verse-list.component';
import { BibleVerseCreateComponent } from './bible-verse-create/bible-verse-create.component';
import { BibleVerseUpdateComponent } from './bible-verse-update/bible-verse-update.component';
import { BibleVerseDeleteComponent } from './bible-verse-delete/bible-verse-delete.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'bible-verse-list', component: BibleVerseListComponent },
  { path: 'bible-verse-create', component: BibleVerseCreateComponent },
  { path: 'bible-verse-update', component: BibleVerseUpdateComponent },
  { path: 'bible-verse-delete', component: BibleVerseDeleteComponent},
  { path: 'favorites', component: FavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

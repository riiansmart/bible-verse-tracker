import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibleVerseListComponent } from './bible-verse-list/bible-verse-list.component';
import { BibleVerseCreateComponent } from './bible-verse-create/bible-verse-create.component';
import { BibleVerseUpdateComponent } from './bible-verse-update/bible-verse-update.component';

const routes: Routes = [
  { path: 'bible-verse-list', component: BibleVerseListComponent },
  { path: 'bible-verse-create', component: BibleVerseCreateComponent },
  { path: 'bible-verse-update/:id', component: BibleVerseUpdateComponent },
  { path: '', redirectTo: '/bible-verse-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

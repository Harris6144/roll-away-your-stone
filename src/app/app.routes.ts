import { Routes } from '@angular/router';

import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './auth/sign-in-form/sign-in-form.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';
import { CreateSongFormComponent } from './songs/create-song-form/create-song-form.component';
import { UpdateSongFormComponent } from './songs/update-song-form/update-song-form.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpFormComponent },
  { path: 'sign-in', component: SignInFormComponent },
  { path: 'songs', component: SongListComponent },
  { path: 'songs/:songId', component: SongDetailComponent },
  { path: 'create-song', component: CreateSongFormComponent },
  { path: 'update-song/:songId', component: UpdateSongFormComponent }
];

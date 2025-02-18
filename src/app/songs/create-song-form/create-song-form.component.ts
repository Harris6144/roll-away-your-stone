import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SongService } from '../song.service';

@Component({
  selector: 'main[app-create-song-form]',
  imports: [ReactiveFormsModule],
  templateUrl: './create-song-form.component.html',
  host: {
    'class': 'bg-body-tertiary px-3 py-5'
  }
})
export class CreateSongFormComponent {
  router: Router = inject(Router);
  songService: SongService = inject(SongService);
  createSongForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    lyrics: new FormControl('')
  });

  onSubmit() {
    this.createSongForm.disable();
    this.songService.createSong(this.createSongForm.value)
      .then(() => this.router.navigate(['/songs']))
      .catch(error => console.error(error))
      .finally(() => this.createSongForm.enable());
  }
}

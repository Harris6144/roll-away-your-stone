import { Component, inject, input, InputSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SongService } from '../song.service';

@Component({
  selector: 'main[app-update-song-form]',
  imports: [ReactiveFormsModule],
  templateUrl: './update-song-form.component.html',
  host: {
    'class': 'bg-body-tertiary px-3 py-5'
  }
})
export class UpdateSongFormComponent {
  router: Router = inject(Router);
  songService: SongService = inject(SongService);
  songId: InputSignal<string> = input('');
  updateSongForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    lyrics: new FormControl('')
  });

  ngOnInit() {
    this.updateSongForm.disable();
    this.songService.getSong(this.songId())
      .then(song => this.updateSongForm.patchValue(song))
      .catch(error => console.error(error))
      .finally(() => this.updateSongForm.enable());
  }

  onSubmit() {
    this.updateSongForm.disable();
    this.songService.updateSong(this.songId(), this.updateSongForm.value)
      .then(() => this.router.navigate(['/songs', this.songId()]))
      .catch(error => console.error(error))
      .finally(() => this.updateSongForm.enable());
  }
}

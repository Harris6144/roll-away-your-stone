import { Component, inject, input, InputSignal, resource, Resource, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { SongService } from '../song.service';
import { Song } from '../song.model';

@Component({
  selector: 'main[app-song-detail]',
  imports: [RouterLink],
  templateUrl: './song-detail.component.html',
  host: {
    'class': 'bg-body-tertiary px-3 py-5'
  }
})
export class SongDetailComponent {
  router: Router = inject(Router);
  songService: SongService = inject(SongService);
  songId: InputSignal<string> = input('');
  song: Resource<Song | undefined> = resource({
    request: () => this.songId(),
    loader: params => this.songService.getSong(params.request)
  });
  isDeleting: WritableSignal<boolean> = signal(false);

  onDelete() {
    this.isDeleting.set(true);
    this.songService.deleteSong(this.songId())
      .then(() => this.router.navigate(['/songs']))
      .catch(error => console.error(error))
      .finally(() => this.isDeleting.set(false));
  }
}

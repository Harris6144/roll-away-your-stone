import { Component, inject, input, InputSignal, resource, Resource } from '@angular/core';

import { SongService } from '../song.service';
import { Song } from '../song.model';

@Component({
  selector: 'main[app-song-detail]',
  imports: [],
  templateUrl: './song-detail.component.html',
  host: {
    'class': 'bg-body-tertiary px-3 py-5'
  }
})
export class SongDetailComponent {
  songService: SongService = inject(SongService);
  songId: InputSignal<string> = input('');
  song: Resource<Song | undefined> = resource({
    request: () => this.songId(),
    loader: params => this.songService.getSong(params.request)
  });
}

import { Component, inject, resource, Resource } from '@angular/core';

import { SongService } from '../song.service';
import { Song } from '../song.model';

@Component({
  selector: 'main[app-song-list]',
  imports: [],
  templateUrl: './song-list.component.html',
  host: {
    'class': 'bg-body-tertiary px-3 py-5'
  }
})
export class SongListComponent {
  songService: SongService = inject(SongService);
  songs: Resource<Song[] | undefined> = resource({
    loader: () => this.songService.getSongs()
  });
}

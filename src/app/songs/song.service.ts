import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  firestore: Firestore = inject(Firestore);

  async getSongs(): Promise<Song[]> {
    return getDocs(collection(this.firestore, 'songs')).then(querySnapshot => {
      return querySnapshot.docs.map(queryDocumentSnapshot => {
        return { id: queryDocumentSnapshot.id, ...queryDocumentSnapshot.data() } as Song;
      });
    });
  }
}

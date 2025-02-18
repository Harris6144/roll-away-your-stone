import { inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, serverTimestamp } from '@angular/fire/firestore';

import { CreateSongDto, Song } from './song.model';

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

  async getSong(songId: string): Promise<Song> {
    return getDoc(doc(this.firestore, 'songs', songId)).then(documentSnapshot => {
      return { id: documentSnapshot.id, ...documentSnapshot.data() } as Song;
    });
  }

  async createSong(createSongDto: CreateSongDto): Promise<Song> {
    return addDoc(collection(this.firestore, 'songs'), { ...createSongDto, created: serverTimestamp(), updated: serverTimestamp() }).then(documentReference => {
      return getDoc(documentReference).then(documentSnapshot => {
        return { id: documentSnapshot.id, ...documentSnapshot.data() } as Song;
      });
    });
  }
}

export interface Song {
  id: string;
  title: string;
  lyrics: string;
  created: Date;
  updated: Date;
}

export interface CreateSongDto {
  title: string;
  lyrics: string;
}

export interface UpdateSongDto {
  title: string;
  lyrics: string;
}

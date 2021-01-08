import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playlist, Videos, Video } from '../models/playlist.models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private baseURL = 'https://www.googleapis.com/youtube/v3';
  private pageToken = '';
  private nextPageToken = '';
  private params = {
    part: 'snippet',
    maxResults: '10',
    playlistId: 'UUuaPTYj15JSkETGnEseaFFg',
    key: 'AIzaSyB55ZX7SYt9GyH0kh6eg77tnXnWNk0ZvPQ'
  };

  constructor(private httpClient: HttpClient) { }

  getPlayList( ): Observable<Video[]> {
     const params2 = new HttpParams().set('part', 'snippet')
                                     .set('maxResults', '10')
                                     .set('playlistId', 'UUuaPTYj15JSkETGnEseaFFg')
                                     .set('key', 'AIzaSyB55ZX7SYt9GyH0kh6eg77tnXnWNk0ZvPQ')
                                     .set('pageToken', this.nextPageToken );
     return this.httpClient.get<Playlist>( `${ this.baseURL }/playlistItems`, { params: params2 }).
     pipe(
       map( playList => {
            const videos = playList.items;
            this.nextPageToken = playList.nextPageToken;
            return videos;
           }
         ),
         map (
          (videos: Videos[]) => {
            // console.log(videos);
            const videosFiltrado = videos.map( video => video.snippet );
            return videosFiltrado;
          }
       )
      );
  }
}

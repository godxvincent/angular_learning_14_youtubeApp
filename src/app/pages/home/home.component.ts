import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/playlist.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos2U: Video[] = [];
  constructor(private u2Service: YoutubeService) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  reproducirVideo(video: Video): void {
    Swal.fire({
      html:
        `
        <h4> ${ video.title } </h4> <hr>
        <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/${ video.resourceId.videoId }"
                frameborder="0"
                allow="accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture"
                allowfullscreen></iframe>`,
      showCloseButton: true,
      showConfirmButton: false
    });
  }

  cargarVideos(): void {
    this.u2Service.getPlayList().subscribe( data => {
      this.videos2U.push( ...data);
      console.log(this.videos2U);
    });
  }

}

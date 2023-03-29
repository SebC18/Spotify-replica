import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spotify Enhanced by Seb';

  
  constructor(private spotifyService: SpotifyService) {

  }


  // public searchArtists() {
  //   this.
  // }
}

import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  OpenLoginPage() {
    window.location.href =  this.spotifyService.retrieveLoginURL();
    
    //alert('Ceci est un test du clic');
  }

}

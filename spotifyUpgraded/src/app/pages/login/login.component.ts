import { Router } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService, 
              private router: Router) { }

  ngOnInit(): void {
   this.checkTokenCallbackUrl();
  }

  checkTokenCallbackUrl(){
    const token =  this.spotifyService.retrieveTokenCallbackUrl();
    if (!!token){
      this.spotifyService.defineAccessToken(token);

      this.router.navigate(['/player']);
    }

  }

  OpenLoginPage() {
    window.location.href =  this.spotifyService.retrieveLoginURL();
  }

}

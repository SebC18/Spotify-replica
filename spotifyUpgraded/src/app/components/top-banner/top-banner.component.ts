import { SpotifyService } from './../../services/spotify.service';
import { IUser } from './../../Interfaces/IUser';
import { Component, OnInit } from '@angular/core';
import logout from '@iconify/icons-mdi/log-out-variant'
import arrowback from '@iconify/icons-mdi/arrow-back-circle';
import arrowforward from '@iconify/icons-mdi/arrow-forward-circle';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {
  logoutIcon = logout; 
  arrowBackIcon = arrowback;
  arrowForwardIcon = arrowforward;
  
  user: IUser = null;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.user = this.spotifyService.user;
  }

  logOut() {
    this.spotifyService.logout();
  }

}

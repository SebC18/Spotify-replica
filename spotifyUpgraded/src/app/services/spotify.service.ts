import { SpotifyConfig } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Spotify  from 'spotify-web-api-js';
import { IUser } from '../Interfaces/IUser';
import { SpotifyPlaylistHelper, SpotifyUserHelper } from '../Common/spotifyHelper';
import { IPlaylist } from '../Interfaces/IPlaylist';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor(private http: HttpClient) {
    this.spotifyApi = new Spotify();

   }

   async initializeUser() {
    if (!!this.user)
      return true;

    const token = localStorage.getItem('token');

    if (!token)
      return false;

    try {

      this.defineAccessToken(token);
      await this.retrieveSpotifyUser();
      return !!this.user;

    } catch (error) {
      console.log('Could not retrieve Spotify User, check the details for more informations : ', error);
      
      return false;
    }

   }

  async retrieveSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyUserHelper(userInfo);        
  }

  retrieveLoginURL() {
    const authEndpoint = `${SpotifyConfig.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfig.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfig.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfig.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  retrieveTokenCallbackUrl() {
    console.log(window.location.hash);
    
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    console.log(params);
    
    // ici on prend le premier elmt de params et on retourne la deuxieme chaine split seulement
    return params[0].split('=')[1];
 
  }

  defineAccessToken(token : string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    //this.spotifyApi.skipToNext();
  }

  async retrieveUserPlaylists(offset = 0, limit = 50): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, {offset, limit});
    console.log(playlists);

    return playlists.items.map(SpotifyPlaylistHelper);
  }
}

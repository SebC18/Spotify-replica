import { SpotifyConfig } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Spotify  from 'spotify-web-api-js';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  

  constructor(private http: HttpClient) {
    this.spotifyApi = new Spotify();

   }

  retrieveLoginURL() {
    const authEndpoint = `${SpotifyConfig.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfig.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfig.redirectUrl}&`;
    const scopes = `scopes=${SpotifyConfig.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  retrieveTokenCallbackUrl() {
    console.log(window.location.hash);
    
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    console.log(params);
    
    //     ici on prend le premier elmt de params et on retourne la deuxieme chaine split seulement
    return params[0].split('=')[1];
 
  }

  defineAcessToken(token : string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}

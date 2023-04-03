import { SpotifyService } from './../services/spotify.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanLoad {

  constructor(private router: Router, private spotifyService : SpotifyService) {}

  canLoad(
    route: Route, 
    segments: UrlSegment[]
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem('token');  

    if (!token) {
      return this.notLoggedIn();
    }
    return new Promise((res) => {
      const userCreated = this.spotifyService.initializeUser();
      if (userCreated)
        res(true)
      else 
        res(this.notLoggedIn())
    })
    return true;
  }

  notLoggedIn() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }

}

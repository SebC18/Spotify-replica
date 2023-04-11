import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import search from '@iconify/icons-mdi/search-expand';
import library from '@iconify/icons-mdi/library-music-outline'
import groupAdd from '@iconify/icons-mdi/add-box';
import heart from '@iconify/icons-mdi/cards-heart-outline';
import roundHouse from '@iconify/icons-mdi/house-variant'

@Component({
  selector: 'app-left-pannel',
  templateUrl: './left-pannel.component.html',
  styleUrls: ['./left-pannel.component.scss']
})
export class LeftPannelComponent implements OnInit {
  homeIcon= roundHouse;
  searchIcon= search;
  libraryIcon= library;
  addIcon = groupAdd;
  heartIcon = heart; 

  //homeIconify= home;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }
  async OnClickGoNext() {
    await this.spotifyService.spotifyApi.skipToNext();
  }
}

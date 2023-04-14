import { PlayerbarComponent } from './../../components/playerbar/playerbar.component';
import { TopBannerComponent } from './../../components/top-banner/top-banner.component';
import { BtnMenuComponent } from './../../components/btn-menu/btn-menu.component';
import { LeftPannelComponent } from './../../components/left-pannel/left-pannel.component';
import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { IconModule } from '@visurel/iconify-angular';
import {NgxBootstrapIconsModule, search, houseDoorFill} from 'ngx-bootstrap-icons';

const icons = {
  search,
  houseDoorFill
 }
@NgModule({
  declarations: [
    PlayerComponent,
    LeftPannelComponent,
    BtnMenuComponent,
    TopBannerComponent,
    PlayerbarComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    NgxBootstrapIconsModule.pick(icons),
    RouterModule.forChild(PlayerRoutes),
  ]
})
export class PlayerModule { }

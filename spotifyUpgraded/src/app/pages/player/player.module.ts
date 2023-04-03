import { LeftPannelComponent } from './../../components/left-pannel/left-pannel.component';
import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [
    PlayerComponent,
    LeftPannelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes),
  ]
})
export class PlayerModule { }

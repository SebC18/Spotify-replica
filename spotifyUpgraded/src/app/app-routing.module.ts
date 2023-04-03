import { AuthentificationGuard } from './guards/authentification.guard';
import { PlayerModule } from './pages/player/player.module';
import { PlayerComponent } from './pages/player/player.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import ('./pages/player/player.module').then(x => x.PlayerModule),
    canLoad: [AuthentificationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

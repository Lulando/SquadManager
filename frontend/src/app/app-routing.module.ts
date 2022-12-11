import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { SquadComponent } from './squad/squad.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: 'squad', component: SquadComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'addplayer', component: AddPlayerComponent },
  { path: '', redirectTo: '/squad', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

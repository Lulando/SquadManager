import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { SquadComponent } from './squad/squad.component';
import { PlayersComponent } from './players/players.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { CreateSquadComponent } from './create-squad/create-squad.component';

const routes: Routes = [
  { path: 'squad', component: SquadComponent },
  { path: 'squad/create', component: CreateSquadComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:id', component: PlayerEditComponent },
  { path: 'addplayer', component: AddPlayerComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

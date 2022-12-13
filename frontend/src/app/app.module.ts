import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { SquadComponent } from './squad/squad.component';
import { PlayersComponent } from './players/players.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { CreateSquadComponent } from './create-squad/create-squad.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    SquadComponent,
    PlayersComponent,
    PlayerEditComponent,
    CreateSquadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { fetchedPlayer } from '../types/player';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerEditComponent } from '../player-edit/player-edit.component';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  constructor(private http: HttpServiceService) {}

  allPlayers: fetchedPlayer[] = [];

  ngOnInit(): void {
    this.http.getPlayers().subscribe((data: any) => {
      if (!data) {
        return;
      }
      const result = Object.keys(data).map((key) => {
        const player = {
          id: key,
          ...data[key],
        };

        this.allPlayers.push(player);
      });
    });
    console.log(this.allPlayers);
  }

  deleteHandler(id: string) {
    this.http.deletePlayer(id).subscribe();
    this.allPlayers = this.allPlayers.filter((player) => player.id !== id);
  }
}

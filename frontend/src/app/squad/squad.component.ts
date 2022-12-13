import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { squad, fetchedSquad } from '../types/squad';
import { fetchedPlayer, player } from '../types/player';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss'],
})
export class SquadComponent implements OnInit {
  constructor(private http: HttpServiceService) {}

  allPlayers: fetchedPlayer[] = [];
  allSquads: fetchedSquad[] = [];
  currSquad: fetchedPlayer[] = [];
  availablePlayers: fetchedPlayer[] = [];
  Goalkeepers: fetchedPlayer[] = [];
  currPlayer?: fetchedPlayer;
  isGkAdded: boolean = false;

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
        this.availablePlayers.push(player);
        if (player.pos === 'Goalkeeper') this.Goalkeepers.push(player);
      });
    });

    this.http.getSquads().subscribe((data: any) => {
      if (!data) {
        return;
      }

      const result = Object.keys(data).map((key) => {
        const squad = {
          id: key,
          ...data[key],
        };

        this.allSquads.push(squad);
      });
    });
    console.log(this.allSquads);
  }

  addToSquad(id: string) {
    this.currPlayer = this.availablePlayers.find((player) => player.id === id);
    if (!this.currPlayer) {
      return;
    }

    if (this.currPlayer.pos === 'Goalkeeper') {
      this.availablePlayers = this.availablePlayers.filter(
        (player) => player.pos !== 'Goalkeeper'
      );
    }
    this.currSquad.push(this.currPlayer);
    this.availablePlayers = this.availablePlayers.filter(
      (player) => player.id !== id
    );
  }

  removeFromSquad(id: string) {
    this.currPlayer = this.currSquad.find((player) => player.id === id);
    if (!this.currPlayer) {
      return;
    }

    if (this.currPlayer.pos === 'Goalkeeper') {
      this.Goalkeepers.forEach((goalkeeper) => {
        this.availablePlayers.push(goalkeeper);
      });
      this.currSquad = this.currSquad.filter((player) => player.id !== id);
    } else {
      this.currSquad = this.currSquad.filter((player) => player.id !== id);
      this.availablePlayers.push(this.currPlayer);
    }
  }

  createSquad() {
    this.http.createSquad(this.currSquad).subscribe((data) => {});
  }
}

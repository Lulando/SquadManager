import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { squad, fetchedSquad } from '../types/squad';
import { fetchedPlayer, player } from '../types/player';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-squad',
  templateUrl: './create-squad.component.html',
  styleUrls: ['./create-squad.component.scss'],
})
export class CreateSquadComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpServiceService,
    private router: Router
  ) {}

  allPlayers: fetchedPlayer[] = [];
  currSquad: fetchedPlayer[] = [];
  fetchSquad: fetchedSquad = {
    name: '',
    players: [],
  };
  availablePlayers: fetchedPlayer[] = [];
  Goalkeepers: fetchedPlayer[] = [];
  currPlayer?: fetchedPlayer;
  isGkAdded: boolean = false;

  name: string = '';

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
    if (!this.name) {
      alert('Squad name cannot be empty');
    } else if (this.name.length < 4) {
      alert('Squad name cannot be shorter than 4 characters');
    } else {
      this.fetchSquad.name = this.name;
      this.currSquad.forEach((player) => {
        this.fetchSquad.players.push(player);
      });
      this.http.createSquad(this.fetchSquad).subscribe((data) => {
        this.router.navigate(['/squad']);
      });
    }
  }
}

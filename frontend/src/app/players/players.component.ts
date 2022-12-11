import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { fetchedPlayer } from '../types/player';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  }

  deleteHandler(id: string) {
    this.http.deletePlayer(id).subscribe();
    this.allPlayers = this.allPlayers.filter((player) => player.id !== id);
  }

  editPlayerForm: FormGroup = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    club: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pos: new FormControl('', [Validators.required]),
  });

  editHandler(id: string) {
    const data = { lname: 'AAAA' }; // dane zawodników
    this.http.editPlayer(id, data).subscribe((data: any) => {
      this.allPlayers = this.allPlayers.map((player) => {
        if (player.id === id) {
          const pl = {
            id,
            lname: data?.lname ?? player.lname,
            fname: data?.fname ?? player.fname,
            club: data?.club ?? player.club,
            pos: data?.pos ?? player.pos,
          };
          return pl;
        }
        return player;
      }) as fetchedPlayer[];
    });
  }
}

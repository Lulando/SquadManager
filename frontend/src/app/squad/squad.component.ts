import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { squad, fetchedSquad } from '../types/squad';
import { fetchedPlayer } from '../types/player';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss'],
})
export class SquadComponent implements OnInit {
  constructor(private http: HttpServiceService) {}

  squadList: squad[] = [];
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

    this.http.getSquad().subscribe((data: any) => {})
  }

  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { player, fetchedPlayer } from './types/player';
import { squad } from './types/squad';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get(
      'https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/players.json'
    );
  }

  getPlayer(id: string) {
    return this.http.get(
      `https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/players/${id}.json`
    );
  }

  deletePlayer(id: string) {
    return this.http.delete(
      `https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/players/${id}.json`
    );
  }
  createPlayer(data: player) {
    return this.http.post(
      'https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/players.json',
      data
    );
  }

  editPlayer(id: string, data: unknown) {
    return this.http.patch(
      `https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/players/${id}.json`,
      data
    );
  }

  createSquad(data: squad) {
    return this.http.post(
      'https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/squad.json',
      data
    );
  }

  getSquad() {
    return this.http.get(
      'https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/squad.json'
    );
  }

  editSquad(id: string, data: unknown) {
    return this.http.patch(
      'https://squadman-a76ea-default-rtdb.europe-west1.firebasedatabase.app/${id}/json',
      data
    );
  }
}

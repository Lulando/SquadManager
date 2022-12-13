import { player, fetchedPlayer } from './player';

// export type squad = player[];

export type squad = {
  name: string;
  players: player[];
};

// export type fetchedSquad = fetchedPlayer[];

export type fetchedSquad = {
  name: string;
  players: player[];
};

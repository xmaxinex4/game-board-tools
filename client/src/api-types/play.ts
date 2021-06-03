import { Game } from "./game";
import { Group } from "./group";
import { Score } from "./score";

export type Play = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  date: Date,
  startTime: Date,
  endTime: Date,
  group: Group,
  groupId: string,
  game: Game,
  gameId: string,
  firstPlay: boolean,
  dontCount: boolean,
  scores: Score[]
}
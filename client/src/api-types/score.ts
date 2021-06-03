import { Play } from "./play";
import { User } from "./user";

export type Score = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  player: User,
  playerId: string,
  score: number,
  play: Play,
  playId: string
}
import { Game } from "./game";
import { User } from "./user";

export type Collection = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  name: string,
  owners: User[],
  games: Game[]
}

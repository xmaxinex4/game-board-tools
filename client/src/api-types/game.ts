import { Collection } from "./collection";
import { Play } from "./play";
import { PollOption } from "./poll-option";

export type Game = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  name: string,
  description: string,
  noPoints: boolean,
  highestWins: boolean,
  cooperative: boolean,
  usesTeams: boolean,
  urlThumb: string,
  year: number,
  bggId: number,
  urlImage: string,
  designers: string[],
  publishers: string[],
  artists: string[],
  categories: string[],
  families: string[],
  minPlayers: number,
  maxPlayers: number,
  age: number,
  minPlaytime: number,
  maxPlaytime: number,
  mechanics: string[],
  bggComplexityRating: number,
  Collection: Collection,
  collectionId: string,
  play: Play[],
  pollOption: PollOption[]
}
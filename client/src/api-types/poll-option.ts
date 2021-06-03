import { Game } from "./game";
import { Poll } from "./poll";
import { UserVote } from "./user-vote";

export type PollOption = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  userVotes: UserVote[],
  game: Game,
  gameId: string,
  poll: Poll,
  pollId: string
}
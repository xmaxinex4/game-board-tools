import { PollOption } from "./poll-option";
import { User } from "./user";

export type UserVote = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  veto: boolean,
  vote: PollOption,
  voteId: string,
  voter: User,
  voterId: string
}
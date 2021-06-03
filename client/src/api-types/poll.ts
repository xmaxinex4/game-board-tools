import { Group } from "./group";
import { PollOption } from "./poll-option";
import { User } from "./user";

export type Poll = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  open: boolean,
  title: string,
  pollOptions: PollOption[],
  author: User,
  authorId: string,
  group: Group,
  groupId: string,
  playDate: Date
}

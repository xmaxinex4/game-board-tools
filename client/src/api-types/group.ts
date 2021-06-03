import { GroupMember } from "./group-member";
import { Play } from "./play";
import { Poll } from "./poll";

export type Group = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  name: string,
  members: GroupMember[],
  polls: Poll[],
  plays: Play[]
}

import { Group } from "./group";
import { User } from "./user";

export type GroupMember = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  user: User,
  userId: string,
  group: Group,
  groupId: string,
  isAdmin: boolean
}

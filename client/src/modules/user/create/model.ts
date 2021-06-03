import { User } from "../../../api-types/user";

export type CreateUserFormModel = Partial<User> & {
  confirmPassword: string;
}
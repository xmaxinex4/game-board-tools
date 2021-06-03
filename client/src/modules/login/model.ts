import { User } from "../../api-types/user";

export type LoginFormModel = Pick<User, "email" | "password">;

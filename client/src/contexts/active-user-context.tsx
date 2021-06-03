import React from "react";
import { User } from "../api-types/user";

export interface ActiveUserContextProps {
  activeUser?: User;
}

export const ActiveUserContext = React.createContext<ActiveUserContextProps>({ activeUser: undefined });

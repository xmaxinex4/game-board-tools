import React from "react";
import { Group } from "../api-types/group";

export interface ActiveGroupContextProps {
  activeGroup?: Group;
  setActiveGroup?: React.Dispatch<React.SetStateAction<Group | undefined>>;
}

export const ActiveGroupContext = React.createContext<ActiveGroupContextProps>({ activeGroup: undefined, setActiveGroup: undefined });

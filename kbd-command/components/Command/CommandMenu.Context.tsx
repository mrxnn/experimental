import { createContext } from "react";

interface CommandMenuContextState {
  activeEntry: string;
  setActiveEntry: (activeEntry: string) => void;
}

export const CommandMenuContext = createContext<CommandMenuContextState>({
  activeEntry: "",
  setActiveEntry: () => {},
});

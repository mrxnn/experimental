import { createContext } from "react";

interface CommandMenuContextType {
  activeEntry: string;
  setActiveEntry: (activeEntry: string) => void;
}

export const CommandMenuContext = createContext<CommandMenuContextType>({
  activeEntry: "",
  setActiveEntry: () => {},
});

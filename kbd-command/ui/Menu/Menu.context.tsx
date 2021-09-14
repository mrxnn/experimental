import { createContext, useContext } from "react";
import { ListItem } from "@/ui/Menu/MenuData";

interface MenuContextType {
  menuList: ListItem[];
  setMenuList: (value: ListItem[]) => void;
  historyList: ListItem[][];
  setHistoryList: (value: ListItem[][]) => void;
}

export const MenuContext = createContext<MenuContextType>(null);

export const useMenu = () => useContext(MenuContext);

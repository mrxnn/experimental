import { FC, ReactElement, useEffect, useState } from "react";
import { ArrowRight } from "@/ui/Icons";
import Kbd, { Keys } from "@/ui/Kbd";
import Window from "@/ui/Menu/Window";
import { ListItem, initialList } from "@/ui/Menu/MenuData";
import cx from "clsx";

export const Menu: FC<{}> = ({}) => {
  return (
    <>
      <Window>
        <MenuContent />
      </Window>
    </>
  );
};

import { useMenu, MenuContext } from "./Menu.context";
import useKeyPress from "@/lib/useKeyPress";

export const MenuContent: FC<{}> = ({}) => {
  const [menuList, setMenuList] = useState<ListItem[]>(initialList);
  const [activeMenuText, setActiveMenuText] = useState("Theme");

  // stores a snapshot of the current menuList - basically a stack of snapshots
  // each snapshot is an array of list items, and we store those in another array
  const [historyList, setHistoryList] = useState<ListItem[][]>([]);

  // keyboard
  const downPress = useKeyPress(Keys.ArrowDown);
  const upPress = useKeyPress(Keys.ArrowUp);

  const goBack = () => {
    const last = historyList.pop();
    if (last) {
      setMenuList(last);
    }
  };

  useEffect(() => {
    if (downPress) console.log("Down");
  }, [downPress]);

  useEffect(() => {
    if (upPress) console.log("Up");
  }, [upPress]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-inked-700">
        <div className="flex space-x-2">
          <Breadcrumb text="Menu" />
          <Breadcrumb text="Work" />
        </div>
        <input
          type="text"
          placeholder="Finnnd..."
          className="bg-transparent placeholder-inked-500 caret-inked-500 text-lg font-light focus:outline-none w-full mt-3 ml-[3px]"
        />
      </div>

      <MenuContext.Provider
        value={{
          menuList,
          setMenuList,
          historyList,
          setHistoryList,
          activeMenuText,
          setActiveMenuText,
        }}>
        <div className="flex-1 overflow-y-auto py-2">
          {menuList.map((menu, index) => {
            if (!menu.type || menu.type === "menu") {
              return <MenuItem key={index} {...menu} />;
            } else {
              return <MenuTitle key={index} {...menu} />;
            }
          })}
        </div>
      </MenuContext.Provider>
    </div>
  );
};

interface MenuItemProps {
  text: string;
  kbd?: Keys[];
  icon?: ReactElement;
  inner?: ListItem[];
  active?: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ text, kbd, icon, inner }) => {
  const {
    menuList,
    setMenuList,
    historyList,
    setHistoryList,
    activeMenuText,
    setActiveMenuText,
  } = useMenu();

  const handleClick = () => {
    if (inner) {
      // stack.push()
      setHistoryList([...historyList, menuList]);
      // set the current menu list
      setMenuList(inner);
      // set the first item in the list array default active item
      setActiveMenuText(inner[0].text);
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setActiveMenuText(text)} // TODO: debounce
      className={cx(
        "flex items-center h-12 px-4 mx-2 space-x-4 rounded-md cursor-pointer transition-colors duration-75",
        {
          "text-white bg-inked-800": activeMenuText === text,
          "text-inked-500": activeMenuText !== text,
        }
      )}>
      {icon ? <>{icon}</> : <ArrowRight />}
      <p className="translate-y-[2px] flex-1">{text}</p>
      {kbd && <Kbd keys={kbd} />}
    </div>
  );
};

const Breadcrumb = ({ text }: { text: string }) => (
  <span className="bg-inked-700 text-inked-300 text-xs font-light px-2 py-1 cursor-pointer rounded-md">
    {text}
  </span>
);

const MenuTitle = ({ text }: { text: string }) => (
  <p className="text-inked-500 font-light px-3 my-2 tracking-normal text-xs">
    {text}
  </p>
);

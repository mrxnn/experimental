import { createContext, FC, memo, ReactElement, useContext } from "react";
import Window from "../Menu/Window";
import { ArrowRight } from "../Icons";
import Kbd, { Keys } from "../Kbd";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  useCommand,
  usePages,
  CommandGroup,
} from "cmdk";

const CommandContext = createContext(null);

const CommandMenu: FC<{}> = memo(({}) => {
  const commandProps = useCommand({
    label: "Site Navigation",
  });

  const [pages, setPages] = usePages(commandProps, TopLevelCommands);
  const Items = pages[pages.length - 1];

  return (
    <div>
      <Window>
        <Command {...commandProps} className="flex flex-col h-full command">
          <div className="p-3 border-b border-inked-700">
            <div className="flex space-x-2">
              <Breadcrumb text="Menu" />
              <Breadcrumb text="Work" />
            </div>
            <CommandInput
              placeholder="Finnnd..."
              className="bg-transparent placeholder-inked-500 caret-inked-500 text-lg font-light focus:outline-none w-full mt-3 ml-[3px]"
            />
          </div>
          <div className="flex-1 h-full overflow-y-hidden py-2">
            <CommandList className="h-full overflow-y-auto">
              <CommandContext.Provider value={{ pages, setPages }}>
                <Items />
              </CommandContext.Provider>
            </CommandList>
          </div>
        </Command>
      </Window>
    </div>
  );
});

export default CommandMenu;

interface MenuItemProps {
  value: string;
  text: string;
  kbd?: Keys[];
  icon?: ReactElement;
  callback?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ value, text, kbd, icon, callback }) => {
  return (
    <CommandItem value={`${value} ${text}`} callback={callback}>
      <div className="flex items-center h-12 px-4 space-x-4 rounded-md cursor-pointer focus:outline-none">
        {icon ? <>{icon}</> : <ArrowRight />}
        <p className="translate-y-[2px] flex-1">{text}</p>
        {kbd && <Kbd keys={kbd} />}
      </div>
    </CommandItem>
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

export const TopLevelCommands: FC<{}> = ({}) => {
  const { pages, setPages } = useContext(CommandContext);

  return (
    <>
      <CommandGroup heading={<MenuTitle text="Theme" />}>
        <MenuItem
          value="A"
          text="Theme"
          kbd={[Keys.Shift, Keys.T]}
          callback={() => {
            setPages([...pages, ThemeCommands]);
          }}
        />
      </CommandGroup>
      <CommandGroup heading={<MenuTitle text="Navigation" />}>
        <MenuItem value="B" text="Index Page" />
        <MenuItem value="C" text="Blog Posts" />
        <MenuItem value="D" text="About Me" />
        <MenuItem value="E" text="Contact Me" />
      </CommandGroup>
      <CommandGroup heading={<MenuTitle text="External" />}>
        <MenuItem value="F" text="Twitter" />
        <MenuItem value="G" text="LinkedIn" />
        <MenuItem value="H" text="Spotity" />
      </CommandGroup>
    </>
  );
};

// theme pages
export const ThemeCommands: FC<{}> = ({}) => {
  return (
    <>
      <MenuItem value="A" text="Light" />
      <MenuItem value="B" text="Dark" />
      <MenuItem value="C" text="System" />
    </>
  );
};

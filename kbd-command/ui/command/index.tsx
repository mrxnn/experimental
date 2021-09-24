// learnt so much from pacocoursey's personal website -> https://github.com/pacocoursey/paco 🙏

import {
  FC,
  memo,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { ArrowRight } from "ui/Icons";
import Window from "ui/Window";
import Keystroke from "ui/Keystroke";
import useKeyPress from "lib/useKeyPress";
import tinykeys from "tinykeys";

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  useCommand,
  usePages,
  CommandGroup,
} from "cmdk";

// command context
const CommandContext = createContext(null);

// command menu
const CommandMenu: FC<{}> = memo(({}) => {
  const commandProps = useCommand();
  const { search } = commandProps;
  const [pages, setPages] = usePages(commandProps, TopLevelCommands);
  const Items = pages[pages.length - 1];
  const backspacePress = useKeyPress("Backspace");
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(["Menu"]);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  //go back
  useEffect(() => {
    if (backspacePress && !search) {
      if (breadcrumbs.length > 1) setBreadcrumbs((bks) => bks.splice(-1));
      setPages([...pages, TopLevelCommands]);
    }
  }, [backspacePress]);

  // bounce the window when page changes
  const commandRef = useRef(null);
  useEffect(() => {
    if (commandRef.current) {
      commandRef.current.style.transform = "scale(0.99)";
      commandRef.current.style.transition = "transform 0.1s ease";
      setTimeout(() => {
        commandRef.current.style.transform = "";
      }, 100);
    }
  }, [pages]);

  // keybindings
  useEffect(() => {
    const unsubscribe = tinykeys(window, {
      // open-close window
      "$mod+k": (e) => {
        e.preventDefault();
        setIsCommandOpen((value) => !value);
      },
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsCommandOpen(true)}
        className="focus:bg-gray-200 dark:focus:bg-gray-800 px-1 -mr-1 rounded outline-none focus:ring">
        <span className="font-semibold text-lg">⌘</span>
      </button>

      {/* Command Dialog */}
      <Window isOpen={isCommandOpen} setIsOpen={setIsCommandOpen}>
        <Command
          {...commandProps}
          className="flex flex-col command absolute inset-0"
          ref={commandRef}>
          <div className="p-3 border-b border-gray-200 dark:border-gray-700/60">
            <div className="flex space-x-2">
              {breadcrumbs.map((bread, index) => (
                <Breadcrumb key={`${bread}-${index}`} text={bread} />
              ))}
            </div>
            <CommandInput
              placeholder="Keyword..."
              className="bg-transparent placeholder-gray-500 caret-gray-500 text-lg font-light focus:outline-none w-full mt-3 ml-[3px]"
            />
          </div>
          <div className="flex-1 py-2 overflow-hidden">
            <CommandList className="h-full overflow-y-auto">
              <CommandContext.Provider
                value={{ pages, setPages, breadcrumbs, setBreadcrumbs }}>
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
  kbd?: string[];
  icon?: ReactElement;
  callback?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ value, text, kbd, icon, callback }) => {
  return (
    <CommandItem value={`${value} ${text}`} callback={callback}>
      <div className="flex items-center h-11 px-4 space-x-4 rounded-md cursor-pointer focus:outline-none">
        {icon ? <>{icon}</> : <ArrowRight />}
        <p className="translate-y-[2px] flex-1">{text}</p>
        {kbd && <Keystroke variant="xs" keys={kbd} />}
      </div>
    </CommandItem>
  );
};

const Breadcrumb = ({ text }: { text: string }) => {
  return (
    <span className="bg-gray-200 dark:bg-gray-800 dark:text-gray-300 text-xs font-light px-3 py-1 cursor-pointer rounded-md">
      {text}
    </span>
  );
};

const MenuTitle = ({ text }: { text: string }) => (
  <p className="text-gray-500 dark:text-gray-400/80 font-light px-3 my-2 tracking-normal text-xs">
    {text}
  </p>
);

export const TopLevelCommands: FC<{}> = ({}) => {
  const { pages, setPages, breadcrumbs, setBreadcrumbs } =
    useContext(CommandContext);

  return (
    <>
      <CommandGroup heading={<MenuTitle text="Themes" />}>
        <MenuItem
          value="A"
          text="Theme"
          kbd={["Shift", "P"]}
          callback={() => {
            setBreadcrumbs([...breadcrumbs, "Theme"]);
            setPages([...pages, ThemeCommands]);
          }}
        />
      </CommandGroup>
      <CommandGroup heading={<MenuTitle text="Writtings" />}>
        <MenuItem value="B" text="Blog Page" />
        <MenuItem value="C" text="Seach Blog Posts..." />
      </CommandGroup>
      <CommandGroup heading={<MenuTitle text="Navigation" />}>
        <MenuItem value="D" text="Index Page" />
        <MenuItem value="E" text="Freelancing" />
        <MenuItem value="F" text="Contact Me" />
      </CommandGroup>
      <CommandGroup heading={<MenuTitle text="External Links" />}>
        <MenuItem value="G" text="Twitter" />
        <MenuItem value="H" text="LinkedIn" />
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

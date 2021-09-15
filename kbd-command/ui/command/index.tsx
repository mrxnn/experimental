import { FC, memo, ReactElement } from "react";
import Window from "../Menu/Window";
import { ArrowRight } from "../Icons";
import Kbd, { Keys } from "../Kbd";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  useCommand,
  CommandGroup,
} from "cmdk";

const CommandMenu: FC<{}> = memo(({}) => {
  const commandProps = useCommand({
    label: "Site Navigation",
  });

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
              <CommandGroup heading={<MenuTitle text="Theme" />}>
                <MenuItem text="Theme" />
              </CommandGroup>
              <CommandGroup heading={<MenuTitle text="Navigation" />}>
                <MenuItem text="Index Page" />
                <MenuItem text="Inspirations" />
                <MenuItem text="Contact Me" />
                <MenuItem text="Hello" />
                <MenuItem text="World" />
              </CommandGroup>
            </CommandList>
          </div>
        </Command>
      </Window>
    </div>
  );
});

export default CommandMenu;

interface MenuItemProps {
  text: string;
  kbd?: Keys[];
  icon?: ReactElement;
}

const MenuItem: FC<MenuItemProps> = ({ text, kbd, icon }) => {
  return (
    <CommandItem value={text}>
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

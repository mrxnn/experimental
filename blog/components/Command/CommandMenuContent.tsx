import { useState } from "react";
import Kbd, { Keys } from "../Kbd";
import Breadcrumb from "./Breadcrumb";
import { CommandMenuContext } from "./CommandMenu.Context";
import CommandMenuEntry from "./CommandMenuEntry";
import CommandMenuGroup from "./CommandMenuGroup";

const CommandMenuContent = () => {
  const [activeEntry, setActiveEntry] = useState("Theme");

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

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-2">
        <CommandMenuContext.Provider value={{ activeEntry, setActiveEntry }}>
          <CommandMenuGroup groupName="Theme">
            <CommandMenuEntry
              text="Theme"
              kbd={<Kbd keys={[Keys.Shift, Keys.T]} />}
            />
          </CommandMenuGroup>

          <CommandMenuGroup groupName="Navigation">
            <CommandMenuEntry text="Index Page" kbd={<Kbd keys={[Keys.H]} />} />
            <CommandMenuEntry text="About Me" />
            <CommandMenuEntry text="Case Studies" />
            <CommandMenuEntry text="Contact Me" />
          </CommandMenuGroup>

          <CommandMenuGroup groupName="External">
            <CommandMenuEntry
              text="Saved"
              kbd={<Kbd keys={[Keys.Shift, Keys.K]} />}
            />
            <CommandMenuEntry text="Twitter" />
            <CommandMenuEntry text="LinkedIn" />
            <CommandMenuEntry text="Playlists" />
          </CommandMenuGroup>
        </CommandMenuContext.Provider>
      </div>
    </div>
  );
};

export default CommandMenuContent;

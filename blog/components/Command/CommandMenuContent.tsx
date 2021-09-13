import { useState } from "react";
import { Keys } from "../Kbd";
import Breadcrumb from "./Breadcrumb";
import { CommandMenuContext } from "./CommandMenu.Context";
import CommandMenuEntry from "./CommandMenuEntry";
import CommandMenuGroup from "./CommandMenuGroup";

interface EntryGroup {
  groupId: number;
  groupName: string;
  entries: Entry[];
}

interface Entry {
  entryId: number;
  entryName: string;
  kbd?: Keys[];
}

const groups: EntryGroup[] = [
  {
    groupId: 1,
    groupName: "Theme",
    entries: [{ entryId: 1, entryName: "Theme", kbd: [Keys.Shift, Keys.T] }],
  },
  {
    groupId: 2,
    groupName: "Navigation",
    entries: [
      { entryId: 1, entryName: "Index Page" },
      { entryId: 2, entryName: "Blog Posts" },
      { entryId: 3, entryName: "About Me" },
      { entryId: 4, entryName: "Contact Me" },
    ],
  },
  {
    groupId: 3,
    groupName: "External",
    entries: [
      { entryId: 1, entryName: "Twitter" },
      { entryId: 2, entryName: "LinkedIn" },
      { entryId: 3, entryName: "Inspiration" },
    ],
  },
];

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

      <div className="flex-1 overflow-y-auto py-2">
        <CommandMenuContext.Provider value={{ activeEntry, setActiveEntry }}>
          {groups.map(({ groupId, groupName, entries }) => (
            <CommandMenuGroup key={groupId} groupName={groupName}>
              {entries.map(({ entryId, entryName, kbd }) => (
                <CommandMenuEntry key={entryId} text={entryName} kbd={kbd} />
              ))}
            </CommandMenuGroup>
          ))}
        </CommandMenuContext.Provider>
      </div>
    </div>
  );
};

export default CommandMenuContent;

import {
  FC,
  Fragment,
  useState,
  useEffect,
  ReactElement,
  useContext,
  createContext,
} from "react";

import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

import { ArrowRight } from "./Icons";
import Kbd, { Keys } from "./Kbd";

const Command: FC<{}> = ({}) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3 * 0.15 }}
        onClick={() => setIsOpen(true)}
        className="has-tooltip text-xl relative">
        <div className="tooltip px-3 py-1 mt-2 rounded absolute top-full -right-1">
          Menu
        </div>
        ⌘
      </motion.button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="fixed inset-0 z-10" onClose={() => setIsOpen(false)}>
          <div className="min-h-screen flex justify-center">
            {/* Animate the overlay first */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-black/70" />
            </Transition.Child>

            {/* Actual content that goes inside */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="bg-inked-900 border border-inked-700 w-[640px] h-[408px] transform mt-[10%] shadow-xl rounded-lg">
                <CommandMenu />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Command;

const Breadcrumb = ({ text }: { text: string }) => (
  <span className="bg-inked-700 text-inked-300 text-xs font-light px-2 py-1 cursor-pointer rounded-md">
    {text}
  </span>
);

interface EntryProps {
  text: string;
  kbd?: ReactElement;
  icon?: ReactElement;
}

const Entry: FC<EntryProps> = ({ text, kbd, icon }) => {
  const { entry, setEntry } = useContext(EntryContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(entry === text);
  }, [entry]);

  return (
    <div
      onMouseEnter={() => setEntry(text)}
      className={`flex items-center h-12 px-4 mx-2 space-x-4 rounded-md transition-all duration-200 cursor-pointer ${
        active ? "text-white bg-inked-800" : "text-inked-500"
      }`}>
      {icon ? <>{icon}</> : <ArrowRight />}
      <p className="translate-y-[2px] flex-1">{text}</p>
      {kbd && <>{kbd}</>}
    </div>
  );
};

const EntryGroup: FC<{ groupName: string }> = ({ groupName, children }) => {
  return (
    <>
      <p className="text-inked-500 font-light px-3 my-2 tracking-normal text-xs">
        {groupName}
      </p>
      {children}
    </>
  );
};

// handle the state of each entry
const EntryContext = createContext(null);

const CommandMenu = () => {
  const [entry, setEntry] = useState("Theme");

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
        <EntryContext.Provider value={{ entry, setEntry }}>
          {/* Theme section */}
          <EntryGroup groupName="Theme">
            <Entry text="Theme" kbd={<Kbd keys={[Keys.Shift, Keys.T]} />} />
          </EntryGroup>

          {/* Navigation section */}
          <EntryGroup groupName="Navigation">
            <Entry text="Index Page" kbd={<Kbd keys={[Keys.H]} />} />
            <Entry text="About Me" />
            <Entry text="Case Studies" />
            <Entry text="Contact Me" />
          </EntryGroup>

          {/* External section */}
          <EntryGroup groupName="External">
            <Entry text="Saved" kbd={<Kbd keys={[Keys.Shift, Keys.K]} />} />
            <Entry text="Twitter" />
            <Entry text="LinkedIn" />
            <Entry text="Playlists" />
          </EntryGroup>
        </EntryContext.Provider>
      </div>
    </div>
  );
};

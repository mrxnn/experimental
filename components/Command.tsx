import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRight } from "./Icons";

export default function Command() {
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
}

const Breadcrumb = ({ text }) => (
  <span className="bg-inked-700 text-inked-300 text-xs font-light px-2 py-1 cursor-pointer rounded-md">
    {text}
  </span>
);

const Entry = ({ text, icon = <ArrowRight size={20} /> }) => {
  const { entry, updateCurrentEntry } = React.useContext(EntryContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(entry === text);
  }, [entry]);

  return (
    <div
      onMouseEnter={() => updateCurrentEntry(text)}
      className={`h-12 px-4 mx-2 flex items-center space-x-4 rounded-md transition-all duration-200 cursor-pointer ${
        active ? "text-white bg-inked-800" : "text-inked-500"
      }`}>
      {icon}
      <p className="translate-y-[2px]">{text}</p>
    </div>
  );
};

const EntryGroup = ({ groupName, children }) => {
  const EntryTitle = ({ title }) => (
    <p className="text-inked-500 font-light px-3 my-2 tracking-normal text-xs">
      {title}
    </p>
  );
  return (
    <>
      <EntryTitle title={groupName} />
      {children}
    </>
  );
};

// handle the state of each entry
const EntryContext = React.createContext(null);

const CommandMenu = () => {
  const [entry, setEntry] = useState("Theme");

  // update the highlighted entry
  const updateCurrentEntry = (entryText: string) => {
    setEntry(entryText);
  };

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
        <EntryContext.Provider value={{ entry, updateCurrentEntry }}>
          {/* Theme section */}
          <EntryGroup groupName="Theme">
            <Entry text="Theme" />
          </EntryGroup>

          {/* Navigation section */}
          <EntryGroup groupName="Navigation">
            <Entry text="Index Page" />
            <Entry text="About Me" />
            <Entry text="Case Studies" />
            <Entry text="Contact Me" />
          </EntryGroup>

          {/* External section */}
          <EntryGroup groupName="External">
            <Entry text="Saved" />
            <Entry text="Twitter" />
            <Entry text="LinkedIn" />
            <Entry text="Playlists" />
          </EntryGroup>
        </EntryContext.Provider>
      </div>
    </div>
  );
};

import { FC, Fragment, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

import CommandMenuContent from "./CommandMenuContent";

const CommandMenu: FC<{}> = ({}) => {
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
              <div className="bg-inked-900 border border-inked-700 w-[640px] h-[408px] transform mt-[180px] shadow-xl rounded-lg">
                <CommandMenuContent />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CommandMenu;

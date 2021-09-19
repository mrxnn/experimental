import { FC, Fragment, useState } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

const Window: FC<{}> = ({ children }) => {
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
        <span className="font-semibold text-lg">⌘</span>
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
              <Dialog.Overlay className="fixed inset-0 bg-white/80 dark:bg-black/80" />
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
              <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-700/60 w-[640px] h-full transform mt-[180px] shadow-2xl dark:shadow-xl rounded-lg">
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Window;

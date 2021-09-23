import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Window: FC<{ isOpen: boolean; setIsOpen: (value: boolean) => void }> = ({
  isOpen,
  setIsOpen,
  children,
}) => {
  return (
    <>
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
              <Dialog.Overlay className="fixed inset-0 bg-gray-200/80 dark:bg-[#000] dark:bg-opacity-80" />
            </Transition.Child>

            {/* Actual content that goes inside */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-40 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-40 sm:translate-y-0 sm:scale-95">
              <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-700/60 w-[640px] sm:h-[423px] px-[1px] transform mt-[20vh] shadow-2xl dark:shadow-xl rounded-none sm:rounded-lg relative">
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

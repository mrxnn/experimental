import { FC } from "react";
import { ShiftKey } from "@/ui/Icons";

// list of keys
export enum Keys {
  K = "K",
  T = "T",
  H = "H",
  Shift = "Shift",
  Command = "Cmd",
  ArrowDown = "ArrowDown",
  ArrowUp = "ArrowUp",
  Enter = "Enter",
  Backspace = "Backspace",
}

interface KeystrokeProps {
  keys: Keys[];
  variant?: "xs" | "sm" | "lg";
}

const Keystroke: FC<KeystrokeProps> = ({ keys, variant = "xs" }) => {
  const showShiftIcon = keys.includes(Keys.Shift);
  const list = keys.filter((k) => k !== Keys.Shift);

  return (
    <p className="flex space-x-1 text-sm">
      {showShiftIcon && (
        <span
          className={`text-${variant} w-5 h-5 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded border dark:border-gray-400/60 dark:border-gray-600`}>
          <ShiftKey size={14} />
        </span>
      )}
      {list.map((key, index) => (
        <span
          key={index}
          className={`text-${variant} min-w-[20px] bg-gray-200 dark:bg-gray-800 px-1 py-[1px] rounded border dark:border-gray-600`}>
          {key}
        </span>
      ))}
    </p>
  );
};

export default Keystroke;

import { FC } from "react";
import { ShiftKey } from "@/ui/Icons";

// list of keys
export enum Keys {
  K = "K",
  T = "T",
  H = "H",
  Shift = "Shift",
  Command = "Cmd",
}

interface KbdProps {
  keys: Keys[];
  variant?: "xs" | "sm" | "lg";
}

const Kbd: FC<KbdProps> = ({ keys, variant = "xs" }) => {
  const showShiftIcon = keys.includes(Keys.Shift);
  const list = keys.filter((k) => k !== Keys.Shift);

  return (
    <p className="flex space-x-1 text-sm">
      {showShiftIcon && (
        <span
          className={`text-${variant} w-5 h-5 flex items-center justify-center bg-inked-700 text  opacity-70 rounded border border-inked-500/40`}>
          <ShiftKey size={14} />
        </span>
      )}
      {list.map((key, index) => (
        <span
          key={index}
          className={`text-${variant} min-w-[20px] bg-inked-700 text px-1 py-[1px] opacity-70 rounded border border-inked-500/40`}>
          {key}
        </span>
      ))}
    </p>
  );
};

export default Kbd;

import { FC } from "react";
import { ShiftKey } from "@/ui/Icons";
import cx from "clsx";

interface KeystrokeProps {
  keys: string[];
  variant?: "xs" | "sm";
}

const Keystroke: FC<KeystrokeProps> = ({ keys, variant = "xs" }) => {
  const showShiftIcon = keys.includes("Shift");
  const list = keys.filter((k) => k !== "Shift");

  return (
    <p className="flex space-x-1">
      {showShiftIcon && (
        <span className="w-5 h-5 flex items-center justify-center rounded bg-gray-200 dark:bg-gray-800 border dark:border-gray-600">
          <ShiftKey size={variant === "xs" ? 12.5 : 14} />
        </span>
      )}
      {list.map((key, index) => (
        <span
          key={index}
          className={cx(
            "min-w-[20px] px-1 py-[1px] flex justify-center items-center rounded bg-gray-200 dark:bg-gray-800 border dark:border-gray-600",
            { "text-[11px]": variant === "xs" },
            { "text-[14px]": variant === "sm" }
          )}>
          {key}
        </span>
      ))}
    </p>
  );
};

export default Keystroke;

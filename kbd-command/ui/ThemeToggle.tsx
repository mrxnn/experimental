import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@/ui/Icons";

const ThemeToggle: FC<{}> = ({}) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // we have access to the theme once mounted
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {mounted && (
        <div className="flex space-x-2 items-center text-gray-800 dark:text-gray-300">
          {resolvedTheme === "dark" && (
            <>
              <span className="translate-y-[0.84px] font-light text-sm">
                Light Mode
              </span>
              <Sun size={18} />
            </>
          )}

          {resolvedTheme === "light" && (
            <>
              <span className="translate-y-[0.9px] font-light text-sm">
                Dark Mode
              </span>
              <Moon size={18} />
            </>
          )}
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;

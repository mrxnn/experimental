import { FC } from "react";
import Keystroke from "@/ui/Keystroke";
import CommandMenu from "@/ui/command";
import ThemeToggle from "@/ui/ThemeToggle";

const Navbar: FC<{}> = ({}) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <div className="overflow-hidden">
          <p>Mayura Ramanayaka</p>
        </div>
        <div className="overflow-hidden">
          <p>
            Software Engineer,{" "}
            <a href="#">
              UENO <span style={{ fontFamily: "Inter" }}>®</span>
            </a>
          </p>
        </div>
        <div className="overflow-hidden">
          <p>Kandy, Sri Lanka</p>
        </div>
      </div>
      {/* theme toggle */}
      <div className="ml-auto hidden md:flex items-center mr-60">
        <ThemeToggle />
      </div>
      {/* command menu */}
      <div className="flex items-center space-x-3 translate-y-[-2px]">
        <div className="hidden md:flex">
          <Keystroke keys={["Cmd", "K"]} variant="sm" />
        </div>
        <CommandMenu />
      </div>
    </div>
  );
};

export default Navbar;

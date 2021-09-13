import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import cx from "clsx";
import { ArrowRight } from "../Icons";
import Kbd, { Keys } from "../Kbd";
import { CommandMenuContext } from "./CommandMenu.Context";

interface EntryProps {
  text: string;
  kbd?: Keys[];
  icon?: ReactElement;
}

const CommandMenuEntry: FC<EntryProps> = ({ text, kbd, icon }) => {
  const { activeEntry, setActiveEntry } = useContext(CommandMenuContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(activeEntry === text);
  }, [activeEntry]);

  return (
    <div
      onMouseEnter={() => setActiveEntry(text)}
      className={cx(
        "flex items-center h-12 px-4 mx-2 space-x-4 rounded-md transition-all duration-200 cursor-pointer",
        {
          "text-white bg-inked-800": active,
          "text-inked-500": !active,
        }
      )}>
      {icon ? <>{icon}</> : <ArrowRight />}
      <p className="translate-y-[2px] flex-1">{text}</p>
      {kbd && <Kbd keys={kbd} />}
    </div>
  );
};

export default CommandMenuEntry;

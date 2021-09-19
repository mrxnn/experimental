import { FC, ReactElement } from "react";
import cx from "clsx";

interface ButtonProps {
  text: string;
  icon?: ReactElement;
  className?: string;
  onClick?: (e: any) => void;
}

const Button: FC<ButtonProps> = ({ text, icon, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "bg-black text-white dark:bg-white  dark:text-black rounded-full px-4 py-1 flex items-center space-x-4",
        className
      )}>
      <p className="font-medium tracking-tight">{text}</p>
      {icon}
    </button>
  );
};

export default Button;

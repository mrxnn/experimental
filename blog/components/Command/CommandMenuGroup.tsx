import { FC } from "react";

const CommandMenuGroup: FC<{ groupName: string }> = ({
  groupName,
  children,
}) => {
  return (
    <>
      <p className="text-inked-500 font-light px-3 my-2 tracking-normal text-xs">
        {groupName}
      </p>
      {children}
    </>
  );
};

export default CommandMenuGroup;

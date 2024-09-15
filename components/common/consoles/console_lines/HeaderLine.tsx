// This component defines a HeaderLine used in console-style UI elements
// It features:
// - A right-pointing arrow icon from react-icons
// - Custom styling for the arrow and header text
// - Utilizes the HeaderText component for the main content
// - Props:
//   - children: string - The text content to be displayed in the HeaderLine
// The component is designed to fit the overall console/terminal aesthetic of the application
// It displays the header text in yellow, creating a distinctive look for section headers

import clsx from "clsx";
import HeaderText from "../../text/HeaderText";
import { MdKeyboardArrowRight } from "react-icons/md";

interface HeaderLineProps {
  children: string;
}

export default function HeaderLine({ children }: HeaderLineProps): JSX.Element {
  return (
    <div className={"flex font-700 text-[32px] font-main justify-start items-center"}>
      <div className={clsx("-ml-[10px] text-yellow-900 pr-[10px]")}>
        <MdKeyboardArrowRight />
      </div>
      <div className={clsx("-ml-2 text-white-1000 uppercase")}>
        <HeaderText color={"text-yellow-900"}>{children}</HeaderText>
      </div>
    </div>
  );
}

// This component defines a BodyLine used in console-style UI elements
// It features:
// - A right-pointing arrow icon from react-icons
// - Custom styling for the arrow and text
// - Utilizes the BodyText component for the main content
// - Props:
//   - children: string - The text content to be displayed in the BodyLine
// The component is designed to fit the overall console/terminal aesthetic of the application

import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import BodyText from "../../text/BodyText";

interface BodyLineProps {
  children: string;
}

export default function BodyLine({
  children,
}: BodyLineProps): JSX.Element {
  return (
    <div
      className={
        "flex font-700 text-[32px] font-main justify-start items-start"
      }>
      <div
        className={clsx(
          "-ml-[10px] text-yellow-900 pr-[15px]"
        )}>
        <MdKeyboardArrowRight />
      </div>
      <div
        className={clsx("-ml-3 text-white-1000 flex mt-1")}>
        <BodyText
          color={"text-white-1000"}
          uppercase={false}
          weight={"font-300"}>
          {children}
        </BodyText>
      </div>
    </div>
  );
}

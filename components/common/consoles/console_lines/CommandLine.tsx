// This component defines a CommandLine used in console-style UI elements
// It features:
// - A right-pointing arrow icon from react-icons
// - Custom styling for the arrow and text
// - Utilizes the BodyText component for the command and label
// - Props:
//   - command: string - The command text to be displayed
//   - label: string - The label text to be displayed after the command
// The component is designed to fit the overall console/terminal aesthetic of the application
// It displays the command in yellow and the label in a lighter yellow, creating a distinctive look

import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import BodyText from "../../text/BodyText";

interface CommandLineProps {
  command: string;
  label: string;
}

export default function CommandLine({
  command,
  label,
}: CommandLineProps): JSX.Element {
  return (
    <div
      className={
        "flex font-700 text-[32px] font-main justify-start items-center"
      }>
      <div
        className={clsx(
          "-ml-[10px] text-yellow-900 pr-[22px]"
        )}>
        <MdKeyboardArrowRight />
      </div>
      <div className={clsx("-ml-4 text-white-1000 flex")}>
        <BodyText
          color={"text-yellow-900"}
          uppercase={false}
          weight={"font-600"}>
          {command}
        </BodyText>
        <BodyText
          color={"text-yellow-700 pl-3"}
          uppercase={true}
          weight={"font-300"}>
          {`_${label}`}
        </BodyText>
      </div>
    </div>
  );
}

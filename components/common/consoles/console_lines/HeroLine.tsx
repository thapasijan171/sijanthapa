// This component defines a HeroLine used in console-style UI elements for hero sections
// It features:
// - A right-pointing arrow icon from react-icons
// - Custom styling for the arrow and hero text
// - Utilizes the HeroText component for the main content
// - Responsive design using Tailwind CSS classes
// - Props:
//   - children: string - The text content to be displayed in the HeroLine
// The component is designed to fit the overall console/terminal aesthetic of the application
// It displays the hero text in white with a yellow arrow, creating a distinctive look for hero sections

import { MdKeyboardArrowRight } from "react-icons/md";
import HeroText from "../../text/HeroText";
import clsx from "clsx";

interface HeroLineProps {
  children: string;
}

export default function HeroLine({ children }: HeroLineProps): JSX.Element {
  return (
    <div className={"flex font-700 text-72p font-main justify-start items-center"}>
      <div className={clsx("lg:text-72p lg:-ml-[27px] text-yellow-900", "md:text-48p", "text-32p -ml-[10px]")}>
        <MdKeyboardArrowRight />
      </div>
      <div className={clsx("mr-2 text-white-1000")}>
        <HeroText>{children}</HeroText>
      </div>
    </div>
  );
}

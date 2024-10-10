// This component represents a CPU console display used in the project
// It shows system information such as:
// - Uptime (1s)
// - CPU usage (13.7%)
// - RAM usage (12/32GB)
// The component uses custom styling with clsx for conditional classes
// and a custom MinConsoleText component for consistent text formatting
// It's designed to fit the overall console/terminal aesthetic of the application
// Colors used: yellow-900 for highlights, white-1000 for regular text

import clsx from "clsx";
import MinConsoleText from "../../text/MinConsole";

export default function CPUConsole(): JSX.Element {
  return (
    <div className={clsx("flex gap-3")}>
      <div>
        <MinConsoleText color={"text-yellow-900"}>
          1s
        </MinConsoleText>
      </div>
      <div>
        <MinConsoleText color={"text-white-1000"}>
          |
        </MinConsoleText>
      </div>
      <div className='flex gap-2'>
        <MinConsoleText color={"text-white-1000"}>
          CPU
        </MinConsoleText>
        <MinConsoleText color={"text-yellow-900"}>
          13.8%
        </MinConsoleText>
      </div>
      <div>
        <MinConsoleText color={"text-white-1000"}>
          |
        </MinConsoleText>
      </div>
      <div className='flex gap-2'>
        <MinConsoleText color={"text-white-1000"}>
          RAM
        </MinConsoleText>
        <MinConsoleText color={"text-yellow-900"}>
          12/32GB
        </MinConsoleText>
      </div>
    </div>
  );
}

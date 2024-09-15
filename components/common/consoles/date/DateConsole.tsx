// This component represents a DateConsole used to display the current time and date
// It features:
// - Real-time clock that updates every second
// - Display of current date
// - Custom styling with clsx for conditional classes
// - Uses MinConsoleText component for consistent text formatting
// - Designed to fit the overall console/terminal aesthetic of the application
// - Colors used: yellow-900 for time and date, white-1000 for separator

import { useEffect, useState } from "react";
import clsx from "clsx";
import MinConsoleText from "../../text/MinConsole";

export default function DateConsole(): JSX.Element {
  const [date, setDate] = useState<Date>(new Date());

  function refreshClock(): void {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={clsx("flex gap-3")}>
      <div id='clock'>
        <MinConsoleText color={"text-yellow-900"}>
          {date.toLocaleTimeString()}
        </MinConsoleText>
      </div>
      <div>
        <MinConsoleText color={"text-white-1000"}>
          |
        </MinConsoleText>
      </div>
      <div className='flex gap-2'>
        <MinConsoleText color={"text-yellow-900"}>
          {new Date().toLocaleDateString()}
        </MinConsoleText>
      </div>
    </div>
  );
}
